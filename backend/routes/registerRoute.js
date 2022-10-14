const express = require('express');
const students = require('../controllers/registerController');
const router = express.Router();

// Rest API
router.get('/getAllStudents', function(req, res){
    students.findAll(req,res);
});

router.post('/addStudent', function(req,res){
    students.create(req,res);
})

router.put('/updateStudent/:id', function(req,res){
    students.update(req,res);
})

router.delete('/deleteStudent/:id', function(req,res){
    students.delete(req,res);
})

router.get('/findOneStudent/:id', function(req,res){
    students.findOne(req,res);
})

module.exports = router;