const database = require("../models")
const Students = database.students;

// Rest API

//get all data
exports.findAll = (req, res) => {
    Students.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
}

//gat one data
exports.findOne = (req, res) => {
    const id = req.params.id;
    Students.findByPk(id)
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message
      });
    });
}

//create data
exports.create = (req, res) => {
    const student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
      };
      Students.create(student)
        .then(data => {
          res.status(200).send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message
          });
        });
}

//update data
exports.update = (req, res) => {
    const id = req.params.id;
    Students.update(req.body, {
      where: { student_id: id }
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
                err.message
        });
      });
};

//delete data
exports.delete = (req, res) => {
    const id = req.params.id;
    Students.destroy({
      where: {student_id : id }
    })
      .then(data => {
        res.status(204).message("Data deleted");
      })
      .catch(err => {
      });
};