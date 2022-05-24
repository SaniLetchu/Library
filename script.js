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