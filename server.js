// const express = require('express');
// //require connection.js page for mysql2 setup
// const db = require('./db/connection');
// const apiRoutes = require('./apiRoutes/routes');
// const PORT = process.env.PORT || 3001;
// const app = express();
// const cTable = require('console.table');
// const inquirer = require('inquirer');






// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use('/api', apiRoutes);



// //Default response for ANY other request (Not Found); must be placed last
// app.use((req, res) => {
//     res.status(404).end();
// });




// // Start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
// });



// //PROMPTS
// const questions = [
//     {
//         type: 'list',
//         name: 'action',
//         message: 'What would you like to do?',
//         choices: [
//             'View all employees',
//             'Add employee',
//             'Update employee Role',
//             'View all roles',
//             'Add role',
//             'View all departments',
//             'Add department',
//             'Quit'
//         ]
//     }
// ]


// let init = function () {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             if (answers.action === 'View all departments') {
//                 db.query('SELECT * FROM department', (err, rows) => {
//                     console.table(rows)
//                 }
//                 )
//             } if(answers.action === 'View all roles') {
//                 db.query('SELECT * FROM roles', (err, rows) => {
//                     console.table(rows)
//                 })
//             }  if(answers.action === 'View all employees') {
//                 db.query('SELECT * FROM employee', (err, rows) => {
//                     console.table(rows)
//                 })
//             }
//         })
// }




// init();



