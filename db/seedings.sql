USE employees_db;

INSERT INTO departments (name)
VALUE ("Sales"),
("Engineering"),
("Finance"),
("Legal");

INSERT INTO roles (title, salary, department_id)
VALUE 
("Sales Lead", 100000, 1),
("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE ("John", "Wayne", 1, null),
("Mike", "Jordan", 2, 1),
("Paul", "Rodriguez", 3, null),
("Christian", "Dior", 4, 3),
("Kevin", "Spacey", 4, 3),
("Jim", "Brown", 5, null),
("Sarah", "McLachlan", 6, null),
("Tim", "Allen", 7, 6);
