const spells = require('express').Router({ mergeParams: true });
const all = require('./all');

spells.get('/', all);

module.exports = spells;