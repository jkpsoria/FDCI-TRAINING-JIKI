var x = 4;
var x = 6;
const y = 4;
console.log(x);
console.log(y);

//

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

function whosPaying(names) {
  return `${
    names[Math.floor(Math.random() * names.length)]
  } is buying lunch today!`;
}

whosPaying(["jiki", "kali", "beethov", "arnel"]);

// let admin = name;
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    year: 1925,
    isbn: "9780743273565",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    year: 1960,
    isbn: "9780061120084",
  },
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    year: 1949,
    isbn: "9780451524935",
  },
];

// Write a function here
// function totalBooks() {
//   return books.length;
// }

const totalBooks = () => books.length;

const totalPages = () => books.reduce((acc, book) => acc + book.pages, 0);

const authors = () => books.map((book) => book.author);

const oldestBook = () =>
  books.reduce((oldest, curr) => (oldest.year < curr.year ? oldest : curr));

//normal function
function newestBook() {
  return books.reduce((oldest, curr) =>
    oldest.year > curr.year ? oldest : curr
  );
}
