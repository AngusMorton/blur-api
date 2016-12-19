const data = require('../../data.json');

// /spells/:spellId
module.exports = (req, res) => {
	res.status(200).json(req.spell);
};