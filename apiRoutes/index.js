
const express = require('express');
const router = express.Router();
const db = require('../db/connection')

//    DEPARTMENTS ROUTES

router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM department`;
     //db object is using SQL query method to execute the callback with all rows from departments
     db.query(sql, (err, rows) => {
        if (err) {
            //if theres an error, respond with a json object 500 error = server err
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
})



//    ROLES ROUTES


router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
     db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
})


//    EMPLOYEES ROUTES

router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employee`;
     //db object is using SQL query method to execute the callback with all rows from departments
     db.query(sql, (err, rows) => {
        if (err) {
            //if theres an error, respond with a json object 500 error = server err
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
})

module.exports = router; 