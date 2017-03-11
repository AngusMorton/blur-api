const routes = require('express').Router();

const spells = require('./spells');
const schools = require('./schools');
const classes = require('./classes');

routes.use('/spells', spells);
routes.use('/schools', schools);
routes.use('/classes', classes);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;