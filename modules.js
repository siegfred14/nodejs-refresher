// to import people from people.js
const xyz = require("./peoples");

// running clg indicates that xyz however is an empty object
// console.log(xyz); // returns an empty array

// running people indicates that xyz however is an empty object
// Just because we import a file doesn't automatically grant us access to it's contents

// console.log(peoples); // returns undefined

// to access the contents of people, we have to manually export
// to do this, we use module.export = 'anything' in the parent module
// this is equal to xyz in modules.js

// ACCESSING MULTIPLE ITEMS OF A MODULE
console.log(xyz.people, xyz.ages);

// TO IMPORT MULTIPLE ITEMS USING DESTRUCTURING
// replace const xyz = require("./peoples"); with
const { people, ages } = require("./peoples");
console.log(people, ages);

// IMPORTING BUILT-IN NODEJS MODULES FOR ADDED FUNCTIONALIY
const os = require("os");
console.log(os);
