class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const novel = new Book("anonymous");

console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);

// Only change code below this line
class Thermostat {
  constructor(value) {
    this._value = (5 / 9) * (value - 32);
  }
  get temperature() {
    return this._value;
  }

  set temperature(updateValue) {
    this._value = updateValue;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log();
console.log(thermos.temperature);
