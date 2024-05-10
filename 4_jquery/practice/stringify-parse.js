var person = {
  name: "John Doe",
  age: "20",
};

const stringified = JSON.stringify(person);

// use JSON.stringify here and log the result
console.log(stringified);

// use JSON.parse here and log the result
console.log(JSON.parse(stringified));
