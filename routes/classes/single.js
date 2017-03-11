const data = require('../../data.json');

// /classes/:classId/
module.exports = (req, res) => {
	res.status(200).json(req.class);
};