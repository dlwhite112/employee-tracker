DROP DATABASE IF EXISTS employees_db;
CREATE database employees_db;

USE employees_db;


CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY id,
    name VARCHAR(30) NOT NULL,
);

CREATE TABLE role ( 
    id INT AUTO_INCREMENT PRIMARY KEY id,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT NOT NULL
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY id,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role (id),
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id)

);

