const schools = require('express').Router();
const all = require('./all');
const single = require('./single');
const spells = require('./spells');
const data = require('../../data.json');

schools.get('/', all);
schools.get('/:schoolId', single);
schools.use('/:schoolId/spells', spells);

// Middleware that finds the school and puts it in the request or returns a 404
schools.param('schoolId', (req, res, next, value) => {
  const school = data.schools.find(school => school.id == value);

  if (school) {
    req['school'] = school;
    next();
  } else {
    res.status(404).send('Invalid school ID');
  }
});

module.exports = schools;