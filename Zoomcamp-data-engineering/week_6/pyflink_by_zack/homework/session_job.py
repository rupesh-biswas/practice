from pyflink.datastream import StreamExecutionEnvironment
from pyflink.table import EnvironmentSettings, StreamTableEnvironment

def create_green_trips_source_kafka(t_env):
    table_name = "green_trips"
    source_ddl = f"""
        CREATE TABLE {table_name} (
            lpep_pickup_datetime STRING,
            lpep_dropoff_datetime STRING,
            PULocationID INT,
            DOLocationID INT,
            passenger_count INT,
            trip_distance DOUBLE,
            tip_amount DOUBLE,
            event_watermark AS TO_TIMESTAMP(lpep_dropoff_datetime),
            WATERMARK FOR event_watermark AS event_watermark - INTERVAL '5' SECOND
        ) WITH (
            'connector' = 'kafka',
            'topic' = 'green-trips',
            'properties.bootstrap.servers' = 'redpanda-1:29092',
            'scan.startup.mode' = 'earliest-offset',
            'format' = 'json'
        );
    """
    t_env.execute_sql(source_ddl)
    return table_name

def create_session_window_sink(t_env):
    table_name = 'sessionized_trips'
    sink_ddl = f"""
        CREATE TABLE {table_name} (
            session_start TIMESTAMP(3),
            session_end TIMESTAMP(3),
            PULocationID INT,
            DOLocationID INT,
            trip_count BIGINT,
            PRIMARY KEY (session_start, PULocationID, DOLocationID) NOT ENFORCED
        ) WITH (
            'connector' = 'jdbc',
            'url' = 'jdbc:postgresql://postgres:5432/postgres',
            'table-name' = '{table_name}',
            'username' = 'postgres',
            'password' = 'postgres',
            'driver' = 'org.postgresql.Driver'
        );
    """
    t_env.execute_sql(sink_ddl)
    return table_name

def sessionize_trips():
    env = StreamExecutionEnvironment.get_execution_environment()
    env.enable_checkpointing(10 * 1000)
    env.set_parallelism(3)

    settings = EnvironmentSettings.new_instance().in_streaming_mode().build()
    t_env = StreamTableEnvironment.create(env, environment_settings=settings)

    source_table = create_green_trips_source_kafka(t_env)
    sink_table = create_session_window_sink(t_env)

    # Use a session window with a 5-minute gap
    t_env.execute_sql(f"""
        INSERT INTO {sink_table}
        SELECT 
            window_start AS session_start,
            window_end AS session_end,
            PULocationID,
            DOLocationID,
            COUNT(*) AS trip_count
        FROM TABLE(
            SESSION(TABLE {source_table}, DESCRIPTOR(event_watermark), INTERVAL '5' MINUTES)
        )
        GROUP BY window_start, window_end, PULocationID, DOLocationID
    """).wait()

if __name__ == '__main__':
    sessionize_trips()