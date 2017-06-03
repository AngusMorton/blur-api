const data = require('../../data.json').classes;
const Fuse = require('fuse.js')
const options = {
	shouldSort: true,
	tokenize: true,
	threshold: 0.3,
	location: 0,
	distance: 100,
	maxPatternLength: 32,
	minMatchCharLength: 1,
	keys: ["name"]
};
const dataset = new Fuse(data, options);

// /classes/
module.exports = (req, res) => {
	if (req.query.q) {
	  	res.status(200).json(dataset.search(req.query.q));
	} else {
	  	res.status(200).json(data);
	}
};