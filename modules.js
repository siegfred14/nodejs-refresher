// to import people from people.js
const xyz = require("./people");

// running clg indicates that xyz however is an empty object
console.log(xyz); // returns an empty array

// running people indicates that xyz however is an empty object
// Just because we import a file doesn't automatically grant us access to it's contents

// console.log(people); // returns undefined

// to access the contents of people, we have to manually export
// to do this, we use module.export = 'anything' in the parent module
