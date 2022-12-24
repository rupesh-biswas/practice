DROP TABLE IF EXISTS employees;
CREATE TABLE IF NOT EXISTS employees(
   employee_id INTEGER  NOT NULL PRIMARY KEY 
  ,first_name  VARCHAR(7) NOT NULL
  ,last_name   VARCHAR(8) NOT NULL
  ,manager_id  INTEGER 
);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4529,'Nancy','Young',4125);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4238,'John','Simon',4329);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4329,'Martina','Candreva',4125);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4009,'Klaus','Koch',4329);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4125,'Mafalda','Ranieri',NULL);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4500,'Jakub','Hrabal',4529);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4118,'Moira','Areas',4952);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4012,'Jon','Nilssen',4952);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4952,'Sandra','Rajkovic',4529);
INSERT INTO employees(employee_id,first_name,last_name,manager_id) VALUES (4444,'Seamus','Quinn',4329);
----

SELECT * FROM employees;

---

SELECT e.employee_id, e.first_name, e.last_name, e.manager_id,
        m.employee_id as m_id, m.first_name as manager_fname, m.last_name as manager_lname
FROM employees as e
LEFT JOIN employees as m
ON e.manager_id = m.employee_id;

--
SELECT DATABASE();
SAKILA-DBVIS;
SHOW tables;
