CREATE DATABASE employees;

CREATE TABLE employee(
  employee_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  code VARCHAR(255),
  profession VARCHAR(255),
  color VARCHAR(255),
  city VARCHAR(255),
  branch VARCHAR(255),
  assigned BOOLEAN
);