A RESTful API for D&amp;D 5e spells

# API
The API consists of two routes, `spells`, and `schools`. If you query for an entity that doesn't exist you will receive 404.

## /spells/

## /spells/:spellId

## /schools/

## /schools/:schoolId

## /schools/:schoolId/spells

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
