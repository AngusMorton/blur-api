const data = require('../../data.json');

// /schools/
module.exports = (req, res) => {
  const schools = data.schools;

  res.status(200).json(schools);
};