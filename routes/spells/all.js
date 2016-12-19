const data = require('../../data.json');

// /spells/
module.exports = (req, res) => {
  const spells = data.spells;

  res.status(200).json(spells);
};