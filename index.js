const inquirer = require('inquirer');
const cTable = require('console.table');
//require connection.js page for mysql2 setup
const db = require('./db/connection');
const res = require('express/lib/response');



//PROMPTS
const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'Add employee',
            'Update employee Role',
            'View all roles',
            'Add role',
            'View all departments',
            'Add department',
            'Quit'
        ]
    }
]

//TO ADD A NEW EMPLOYEE
const employeeInfo = [
    {
        type: 'input',
        name: 'first_name',
        message: 'What is their first name?'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is their last name?'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'What is the role ID?'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'What is the manager ID?'
    }
]

//TO UPDATE AN EMPLOYEE ROLE
const employees = [
    {
        type: 'input',
        name: 'employeeID',
        message: 'Input Employee ID'
    },
    {
        type: 'input',
        name: 'roleID',
        message: 'Input updated role ID'
    }
]

//TO CREATE NEW ROLE
const newRole = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the role title?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary?'
    },
    {
        type: 'input',
        name: 'dept',
        message: 'What is the dept ID for this role?'
    }
]

//CREATE NEW DEPT
const newDept = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the department name?'
    }
]




//  ===============FUNCTIONS=======================


let viewAllEmployees = function () {
    db.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name AS department, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN employee manager ON manager.id = employee.manager_id LEFT JOIN department ON roles.department_id = department.id',
        function (err, results) {
            console.table(results);
            init();
        })
}

let addEmployee = function (answers) {
    const sql = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)';
    const params = [answers.first_name, answers.last_name, answers.role_id, answers.manager_id];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
       
        viewAllEmployees();
    })
}

let updateRole = function (answers) {
    const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
    const params = [answers.roleID, answers.employeeID]

    db.query(sql, params, (err, results) => {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }
        viewAllEmployees();
    })
}

let viewRoles = function () {
    db.query('SELECT department.name, roles.title, roles.salary FROM roles LEFT JOIN department ON roles.department_id = department.id',
        function (err, results) {
            console.table(results);
            init();
        })
}

let addRole = function (answers) {
    const sql = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)';
    const params = [answers.title, answers.salary, answers.dept];

    db.query(sql, params, (err, results) => {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }
        viewRoles();
    })
}


let viewDepts = function () {
    db.query('SELECT * FROM department',
        function (err, results) {
            console.table(results);
            init();
        })
}

let newDepartment = function(answers) {
    const sql = 'INSERT INTO department (name) VALUES (?)';
    const params = [answers.name];

    db.query(sql, params, (err, results) => {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }
        viewDepts();
    })
}




//=====================INITIALIZE APP========================


let init = function () {
    inquirer.prompt(questions)
        .then((answers) => {
            if (answers.action === 'View all employees') {
                viewAllEmployees();
            }
            if (answers.action === 'Add employee') {
                inquirer.prompt(employeeInfo).then((answers) => {
                    // console.log(answers)
                    addEmployee(answers);
                })
            }
            if(answers.action === 'Update employee Role') {
                inquirer.prompt(employees).then((answers) => {
                    // console.log(answers.ID);
                    updateRole(answers);
                })
            }
            if(answers.action === 'View all roles') {
                viewRoles()
            }
            if(answers.action === 'Add role') {
                inquirer.prompt(newRole).then((answers) => {
                    addRole(answers);
                })
            }
            if(answers.action === 'View all departments') {
                viewDepts();
            }
            if(answers.action === 'Add department') {
                inquirer.prompt(newDept).then((answers) => {
                    newDepartment(answers);
                })
            }
        })
}




init();