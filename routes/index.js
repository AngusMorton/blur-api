const routes = require('express').Router();

const spells = require('./spells');
const schools = require('./schools');

routes.use('/spells', spells);
routes.use('/schools', schools);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;