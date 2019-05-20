var Task = require('../models/model');

module.exports = {
  listAllTasks: function(req, res) {
    Task.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: function(req, res) {
    console.log(req.body);
    Task.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  showOne: function(req, res) {
    Task.findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: function(req, res) {
    console.log(req.body);
    Task.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true } // "new:true" will return the updated Task
    )
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  remove: function(req, res) {
    Task.remove({ _id: req.params.id })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
};
