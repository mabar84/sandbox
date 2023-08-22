// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let foundedContacts = contacts.filter((el) => el["firstName"] === name);

  if (!foundedContacts.length) {
    return "No such contact";
  } else {
    for (let i = 0; i < foundedContacts.length; i++) {
      if (foundedContacts[i]["firstName"] === name) {
        if (foundedContacts[i].hasOwnProperty(prop)) {
          return foundedContacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
  }
}

// lookUpProfile("Akira", "likes");
// lookUpProfile("Kristian", "lastName");
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
