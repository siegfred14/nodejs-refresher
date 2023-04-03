// to import people from people.js
const xyz = require("./peoples");

// running clg indicates that xyz however is an empty object
// console.log(xyz); // returns an empty array

// to access multiple items
console.log(xyz.people, xyz.ages); // returns an empty array

// running people indicates that xyz however is an empty object
// Just because we import a file doesn't automatically grant us access to it's contents

// console.log(peoples); // returns undefined

// to access the contents of people, we have to manually export
// to do this, we use module.export = 'anything' in the parent module
// this is equal to xyz in modules.js
