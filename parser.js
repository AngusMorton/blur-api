'use strict'

const json = require('./data.json');

function createSpell (name, spell) {
  return {
    id: name.replace(/\W+/g, '-').toLowerCase(),
    name: name,
    description: spell.description,
    level: spell.level,
    duration: spell.duration,
    range: spell.range,
    components: spell.components,
    school: spell.school.replace(/\W+/g, '-').toLowerCase(),
    casting_time: spell.casting_time
  };
}

function all() {
  var result = []
  for ( const name in json ) {
    result.push(createSpell(name, json[name]));
  }
  return result;
}

function schools() {
  var schoolsSet = new Set(all().map(spell => spell.school));
  return Array.from(schoolsSet)
    .map((school) => {
        return {
          id: school.replace(/\W+/g, '-').toLowerCase(),
          name: school,
        }
      }
    );
}

function write(fileName, object) {
  var fs = require('fs');
  fs.writeFile(fileName, JSON.stringify(object, null, 2), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  }); 
}

write('parsed_data.json', {
  spells: all(),
  schools: schools(),
})