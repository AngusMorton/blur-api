const classes = require('express').Router();
const all = require('./all');
const single = require('./single');
const spells = require('./spells');
const data = require('../../data.json');

classes.get('/', all);
classes.get('/:classId', single);
classes.use('/:classId/spells', spells);

// Middleware that finds the class and puts it in the request or returns a 404
classes.param('classId', (req, res, next, value) => {
  const requestClass = data.classes.find(aClass => aClass.id == value);

  if (requestClass) {
    req['class'] = requestClass;
    next();
  } else {
    res.status(404).send('Invalid class ID');
  }
});

module.exports = classes;