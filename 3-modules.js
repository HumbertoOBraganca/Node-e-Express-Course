// CommonJS, every file is module (by default) 
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names.js');
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade.js')
sayHi('Humberto')
sayHi(names.jhone)
sayHi(names.peter)
