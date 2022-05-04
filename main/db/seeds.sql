INSERT INTO departments (id, department_name)
VALUES (1, "Sales"),
       (2, "Finance"),
       (3, "Research & Development"),
       (4, "Production");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Manager", 345000, 4),
       (2, "Team Lead", 205000, 3),
       (3, "Engineer", 120000, 3),
       (4, "Junior Engineer", 75000, 3),
       (5, "Accountant", 105000, 2),
       (6, "Intern", 35000, 1);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Paul", "McCartney", 1, NULL),
       (2, "John", "Lennon", 5, 1),
       (3, "George", "Harrison", 2, 1),
       (4, "Ringo", "Starr", 6, 1),
       (5, "Sonny", "Bono", 3, 1),
       (6, "Cher", "Sarkisian", 3, 1),
       (7, "Serj", "Tankian", 4, 1);