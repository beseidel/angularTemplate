var controller = require('../controllers/controller');

module.exports = function(app) {
  // '/api'
  app.get('/', function(req, res) {
    controller.listAllTasks(req, res);
  });

  app.get('/api/task/one/:id', function(req, res) {
    controller.showOne(req, res);
  });

  app.post('/api/task/new', function(req, res) {
    controller.createTask(req, res);
  });

  app.put('/api/task/update/:id', function(req, res) {
    controller.updateTask(req, res);
  });
  app.delete('/api/task/rmv/:id', function(req, res) {
    controller.remove(req, res);
  });
};
