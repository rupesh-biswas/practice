--SELECT * FROM employee;

SELECT dept_name, max(salary) as max_salary 
FROM employee
GROUP BY dept_name; 

SELECT e.*,
max(salary) over() as max_salary
FROM employee e;


SELECT e.*,
max(salary) over(partition by dept_name) as max_salary
FROM employee e;
 
-- row_number, rank, dense_rank, lead and lag

SELECT e.*,
row_number() over(partition by dept_name) as rn
FROM employee e;

-- Fetch the first 2 employees from each department to join the company.
SELECT * FROM (
        SELECT e.*, 
        row_number() over(partition by dept_name order by emp_id) as rn
        FROM employee e) x
WHERE x.rn <3
ORDER by dept_name, emp_id DESC;

-- Fetch the top 3 employees in each department earning the max salary
SELECT * FROM (
        SELECT e.*,
        rank() over(partition by dept_name order by salary desc) as rnk
        FROM employee e) x
WHERE x.rnk < 4
ORDER by dept_name, rnk;

SELECT e.*,
rank() over(partition by dept_name order by salary desc) as rnk,
dense_rank() over(partition by dept_name order by salary desc) as DENSE_rnk,
row_number() over(partition by dept_name order by salary desc) as rn
FROM employee e
ORDER by dept_name, rnk;

-- fetch a query to display if the salary of an employee is higher, lower or equal to the previous employee.
SELECT e.*,
lag(salary, 2, 0) over(partition by dept_name order by emp_id) as prev_emp_salary
FROM employee e
ORDER by dept_name, emp_id;

SELECT e.*,
lag(salary) over(partition by dept_name order by emp_id) as prev_emp_salary,
lead(salary) over(partition by dept_name order by emp_id) as next_emp_salary
FROM employee e
ORDER by dept_name, emp_id;


SELECT e.*,
lag(salary, 1, 0) over(partition by dept_name order by emp_id) as prev_emp_salary,
case when e.salary > lag(salary) over(partition by dept_name order by emp_id) then 'Higher than previous employee'
     when e.salary < lag(salary) over(partition by dept_name order by emp_id) then 'Lower than previous employee'
     when e.salary = lag(salary) over(partition by dept_name order by emp_id) then 'Same as previous employee'
     when lag(salary, 1, 0) over(partition by dept_name order by emp_id) = 0 then 'No previous employee'
     end sal_range
FROM employee e
ORDER by dept_name, emp_id;

















