const spells = require('express').Router();
const all = require('./all');
const single = require('./single');
const data = require('../../data.json');

spells.get('/:spellId', single);
spells.get('/', all);

spells.param('spellId', (req, res, next, value) => {
  const spell = data.spells.find(spell => spell.id == value);

  if (spell) {
    req['spell'] = spell;
    next();
  } else {
    res.status(404).send('Invalid spell ID');
  }
});

module.exports = spells;