--1
select
    *
from
    employees;

--2
select
    emp_no,
    first_name,
    last_name
from
    employees
where
    last_name = 'Piveteau';

--3
select
    emp_no,
    first_name,
    last_name,
    hire_date
from
    employees
ORDER BY
    hire_date;

--4
select
    count(emp_no) as total_employees
from
    employees;

--5
select
    hire_date,
    count(emp_no) as total_employees_per_date
from
    employees
GROUP BY
    hire_date;

--6
select
    e.emp_no,
    e.first_name,
    e.last_name,
    d.dept_name
from
    employees as e
    inner join dept_emp as de on e.emp_no = de.emp_no
    inner join departments as d on d.dept_no = de.dept_no;

--7
select
    e.emp_no,
    e.first_name,
    e.last_name,
    t.title
FROM
    employees as e
    left join titles as t on e.emp_no = t.emp_no
GROUP BY
    e.emp_no;

--8
select
    avg(salary)
from
    salaries;

select
    e.emp_no,
    e.first_name,
    e.last_name,
    s.salary as avg_salary,
    d.dept_name
from
    employees as e
    inner join dept_emp as de on e.emp_no = de.emp_no
    inner join departments as d on d.dept_no = de.dept_no
    inner join salaries as s on e.emp_no = s.emp_no
where
    s.salary > (
        select
            avg(s.salary)
        from
            salaries as s
    )
    AND d.dept_name = 'Sales';

--9
select
    e.emp_no,
    e.first_name,
    e.last_name,
    (
        select
            count(t.emp_no)
        from
            titles as t
        where
            t.emp_no = e.emp_no
    ) as total_titles_held
from
    employees as e
    inner join titles as t on e.emp_no = t.emp_no;

--10
select
    *
from
    dept_emp;

select
    e.emp_no,
    e.first_name,
    e.last_name,
    de.dept_no
from
    employees as e
    inner join dept_emp as de on de.emp_no = e.emp_no
where
    de.dept_no in ('d005', 'd007');

--11
select
    d.dept_name,
    avg(s.salary) as avg_salary
from
    salaries as s
    inner join employees as e on e.emp_no = s.emp_no
    inner join dept_emp as de on e.emp_no = de.emp_no
    inner join departments as d on d.dept_no = de.dept_no
group by
    d.dept_name;

--12  
select
    e.emp_no,
    e.first_name,
    e.last_name,
    concat (m.first_name, ' ', m.last_name) as manager_name
from
    employees e
    left join dept_emp as de on e.emp_no = de.emp_no
    left join dept_manager as dm on dm.dept_no = de.dept_no
    left join employees as m on dm.emp_no = m.emp_no;

--13
select
    e.emp_no,
    e.first_name,
    e.last_name,
    e.birth_date,
    m.emp_no,
    m.first_name,
    m.last_name,
    m.birth_date
from
    employees as e
    left join employees as m on e.birth_date = m.birth_date
GROUP BY
    e.emp_no;

select
    first_name,
    last_name,
    'Patient' as role
from
    patients
union ALL
select
    first_name,
    last_name,
    'Doctor' as role
from
    doctors;

--14 there is another way of doing this. im only doing this bc im curious haha.
select
    e.emp_no,
    e.first_name,
    e.last_name,
    (
        select
            'true'
        from
            employees as e
            inner join dept_emp as de on e.emp_no = de.emp_no
            inner join departments as d on d.dept_no = de.dept_no
            inner join salaries as s on e.emp_no = s.emp_no
        where
            d.dept_name = 'Sales'
            and e.emp_no = e.emp_no
        limit
            1
    ) as worked_in_sales
from
    employees as e
union all
select
    e.emp_no,
    e.first_name,
    e.last_name,
    (
        select
            'false'
        from
            employees as e
            inner join dept_emp as de on e.emp_no = de.emp_no
            inner join departments as d on d.dept_no = de.dept_no
            inner join salaries as s on e.emp_no = s.emp_no
        where
            d.dept_name <> 'Sales'
            and e.emp_no = e.emp_no
        limit
            1
    ) as worked_in_sales
from
    employees as e;

--15
select
    e.emp_no,
    e.first_name,
    e.last_name,
    d.dept_name
from
    employees as e
    inner join --brb