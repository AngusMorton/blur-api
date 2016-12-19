const data = require('../../data.json');

// /schools/:schoolId/
module.exports = (req, res) => {
	res.status(200).json(req.school);
};