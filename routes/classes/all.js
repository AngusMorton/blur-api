const data = require('../../data.json');

// /classes/
module.exports = (req, res) => {
  const classes = data.classes;

  res.status(200).json(classes);
};