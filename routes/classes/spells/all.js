const data = require('../../../data.json');

// /classes/:classId/spells/
module.exports = (req, res) => {
	const classId = req.class.id;
	const spells = data.spells.filter(spell => spell.classes.includes(classId));

  res.status(200).json(spells);
};