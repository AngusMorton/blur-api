const data = require('../../../data.json');

// /schools/:schoolId/spells/
module.exports = (req, res) => {
	const schoolId = req.school.id
	const spells = data.spells.filter(spell => spell.school == schoolId);

  res.status(200).json(spells);
};