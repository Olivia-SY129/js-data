import _ from 'lodash' // from 'node_modules'
import getType from './getType' // default 
// import { random, user } from './getRandom' // not default
import * as R from './getRandom' // import all

console.log(_.camelCase('I am seungyeon'))
console.log(getType([]));
console.log(R.random());
console.log(R.user);
console.log(R.default); // default 
