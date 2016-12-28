A RESTful API for D&amp;D 5e spells

# API
The API consists of two routes, `spells`, and `schools`. If you query for an entity that doesn't exist you will receive 404.

## /spells/
Returns a list of `Spell` objects. eg.

GET /spells/
```json
[
    {
      "id": "acid-splash",
      "name": "Acid Splash",
      "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "level": 0,
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "V, S",
      "school": "conjuration",
      "casting_time": "1 action",
      "classes": ["sorcerer", "wizard"]
    },
    {
      "id": "aid",
      "name": "Aid",
      "description": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd.",
      "level": 2,
      "duration": "8 hours",
      "range": "30 feet",
      "components": "V, S, M (a tiny strip of white cloth)",
      "school": "abjuration",
      "casting_time": "1 action",
      "classes": ["cleric", "paladin"]
    }
]
```

## /spells/:spellId
Returns the `Spell` with the `:spellId` provided, or HTTP 404 if there was no `Spell`.

eg.

GET /spells/acid-splash
```json
   {
      "id": "acid-splash",
      "name": "Acid Splash",
      "description": "You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\nThis spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
      "level": 0,
      "duration": "Instantaneous",
      "range": "60 feet",
      "components": "V, S",
      "school": "conjuration",
      "casting_time": "1 action",
      "classes": ["sorcerer", "wizard"]
    }
```

## /schools/
Returns a list of schools. eg.

GET /schools/
```json
[
   {
       "id":"conjuration",
       "name":"conjuration"
   },
   {
       "id":"abjuration",
       "name":"abjuration"
   }
]
```
## /schools/:schoolId
Returns the `School` with the id provided. eg.

GET /schools/abjuration/
```json
   {
       "id":"abjuration",
       "name":"abjuration"
   }
```
## /schools/:schoolId/spells
Returns the list of `Spell`s in the `School` with the `schoolId` provided. eg.

GET /schools/abjuration/spells
```json
[
    {
      "id": "aid",
      "name": "Aid",
      "description": "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration. At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd.",
      "level": 2,
      "duration": "8 hours",
      "range": "30 feet",
      "components": "V, S, M (a tiny strip of white cloth)",
      "school": "abjuration",
      "casting_time": "1 action",
      "classes": ["cleric", "paladin"]
    }
]
```

# Dependencies
Blur requires [Node.js](https://nodejs.org/) and is built to run on [Google Cloud Platform](https://cloud.google.com/).

# Setup
Clone the project then run `npm install` in the root directory.

To run locally use `npm start`. 

## Issues and Feedback
Please use [Github Issues](https://github.com/AngusMorton/blur-api/issues "Github Issues") for feature requests or bug reports.

## License
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
