let myLibrary = [];

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