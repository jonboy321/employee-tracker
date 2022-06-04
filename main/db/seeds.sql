INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Finance"),
       ("Research & Development"),
       ("Production");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Manager", 345000, 4),
       (2, "Team Lead", 205000, 3),
       (3, "Engineer", 120000, 3),
       (4, "Junior Engineer", 75000, 3),
       (5, "Accountant", 105000, 2),
       (6, "Intern", 35000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Paul", "McCartney", 1, NULL),
       ("John", "Lennon", 5, 1),
       ("George", "Harrison", 2, 1),
       ("Ringo", "Starr", 6, 1),
       ("Sonny", "Bono", 3, 1),
       ("Cher", "Sarkisian", 3, 1),
       ("Serj", "Tankian", 4, 1);