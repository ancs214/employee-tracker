const inquirer = require('inquirer');
const cTable = require('console.table');
//require connection.js page for mysql2 setup
const db = require('./db/connection');



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


let init = function () {
    inquirer.prompt(questions)
        .then((answers) => {
            if (answers.action === 'View all employees') {
                viewAllEmployees();
            }
            if (answers.action === 'Add employee') {

            }
        })
}




init();



let viewAllEmployees = function () {
    db.query('SELECT employee.id, employee.first_name, employee.last_name, roles.title, CONCAT(manager.first_name, " ", manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN employee manager ON manager.id = employee.manager_id', 
    //ADD DEPT!
    function(err, results) {
        console.table(results);
        init();
    })
}