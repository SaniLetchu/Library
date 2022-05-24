let myLibrary = [];
const form = document.getElementById("form");
const plusSign = document.querySelector(".plussign");
const closeForm = document.getElementById("closeform");

//hides the form initially
form.style.visibility = "hidden";
form.style.display = "none";

//Event listener for plusSign
plusSign.addEventListener("click", appearForm);

//Event listener for x symbol
closeForm.addEventListener("click", hideForm);

function hideForm() {
    form.style.visibility = "hidden";
    form.style.display = "none";
    plusSign.style.display = "initial";
    plusSign.style.visibility = "visible";
}

function appearForm() {
    form.style.visibility = "visible";
    form.style.display = "initial";
    plusSign.style.visibility = "hidden";
    plusSign.style.display = "none";
}


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages
  this.read = read;
  this.info = function() {
      let readOrNot = "not read yet";
      if(this.read) {
          readOrNot = "is read";
      }
      return this.title + " by " + this.author + ", " + this.pages + " pages, " + readOrNot;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

//Some books for the library
addBookToLibrary("A Game of Thrones", "George R. R. Martin", 694, false);
addBookToLibrary("A Clash of Kings", "George R. R. Martin", 768, false);
addBookToLibrary("A Storm of Swords", "George R. R. Martin", 973, false);
addBookToLibrary("A Feast for Crows", "George R. R. Martin", 753, false);
addBookToLibrary("A Dance with Dragons", "George R. R. Martin", 1056, false);

function displayLibrary() {

}