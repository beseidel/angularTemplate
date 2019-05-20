var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restful', {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
