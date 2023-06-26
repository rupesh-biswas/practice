import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

export default function CounterPage({ initialCount }) {
    const { count, incrementCounter } = useCounter(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button
                onClick={incrementCounter}
            >
                Increment
            </Button>
        </div>
    )
}