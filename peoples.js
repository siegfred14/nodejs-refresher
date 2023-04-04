const people = ["Sam", "Jason", "Rachael", "Isaac"];
const ages = [3, 6, 7, 4];

console.log(people);

// module.exports = "type_anything";
// It doesnt matter what name you use for module.exports, it will equate what you import with require

// exporting multiple items
module.exports = {
  // people: people,
  // ages: ages
  // or simply
  people,
  ages,
};
