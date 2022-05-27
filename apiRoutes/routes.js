
// const express = require('express');
// const router = express.Router();
// const db = require('../db/connection')

// //    DEPARTMENTS ROUTES

// router.get('/departments', (req, res) => {
//     const sql = `SELECT * FROM department`;
//      //db object is using SQL query method to execute the callback with all rows from departments
//      db.query(sql, (err, rows) => {
//         if (err) {
//             //if theres an error, respond with a json object 500 error = server err
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// })


// router.post('/departments', ({ body }, res) => {
//     const sql = `INSERT INTO department (name) VALUES (?)`;
//     const params = [body.name];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: 'success',
//             data: body,
//             changes: result.affectedRows
//         });
//     })
// })


// //    ROLES ROUTES


// router.get('/roles', (req, res) => {
//     const sql = `SELECT * FROM roles LEFT JOIN department on department_id = department.id;`;
//      db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// })


// router.post('/roles', ({ body }, res) => {
//     const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
//     const params = [body.title, body.salary, body.department_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: 'success',
//             data: body,
//             changes: result.affectedRows
//         });
//     })
// })


// router.put('/roles/:id', ({ body }, res) => {
//     const sql = `UPDATE roles SET title = ?, salary = ?, department_id = ? WHERE id = ?`;
//     const params = [body.title, body.salary, body.department_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//             res.json({
//               message: 'success',
//               data: req.body,
//               changes: result.affectedRows
//             });
//           })
//     })



// //    EMPLOYEES ROUTES

// router.get('/employees', (req, res) => {
//     const sql = `SELECT * FROM employee`;
//      //db object is using SQL query method to execute the callback with all rows from departments
//      db.query(sql, (err, rows) => {
//         if (err) {
//             //if theres an error, respond with a json object 500 error = server err
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// })

// router.post('/employees', ({ body }, res) => {
//     const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)`;
//     const params = [body.first_name, body.last_name, body.role_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: 'success',
//             data: body,
//             changes: result.affectedRows
//         });
//     })
// })

// router.put('/employees/:id', (req, res) => {
//     const sql = `UPDATE employee SET first_name = ?, last_name = ?, role_id = ? WHERE id = ?`;
//     const params = [req.body.first_name, req.body.last_name, req.body.role_id, req.params.id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//           } else if (!result.affectedRows) {
//             res.json({
//               message: 'Employee not found'
//             });
//           } else {
//             res.json({
//               message: 'success',
//               data: req.body,
//               changes: result.affectedRows
//             });
//           }
//     })
// })




// module.exports = router; 