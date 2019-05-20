var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TasksSchema = new Schema(
  {
    title: { type: String },
    description: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('task', TasksSchema);
