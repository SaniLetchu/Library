let myLibrary = [];
const form = document.getElementById("form");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
pages.value = 0;
const author = document.getElementById("author");
const read = document.getElementById("read");
const plusSign = document.querySelector(".plussign");
const closeForm = document.getElementById("closeform");
const cards = document.querySelector(".main-content");

//Create new book for the library when new form is submited
form.addEventListener('submit', fetchDataForBook);

function fetchDataForBook() {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    title.value = "";
    author.value = "";
    pages.value = 0;
    read.checked = false;
    displayLibrary();
    hideForm();
}

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
      let readOrNot = "has not been read";
      if(this.read) {
          readOrNot = "has been read";
      }
      return this.title + " by " + this.author + ", " + this.pages + " pages, " + readOrNot;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.unshift(book);
}

//Some initial books for the library
addBookToLibrary("A Game of Thrones", "George R. R. Martin", 694, false);
addBookToLibrary("A Clash of Kings", "George R. R. Martin", 768, false);
addBookToLibrary("A Storm of Swords", "George R. R. Martin", 973, false);
addBookToLibrary("A Feast for Crows", "George R. R. Martin", 753, false);
addBookToLibrary("A Dance with Dragons", "George R. R. Martin", 1056, false);

function displayLibrary() {
    let deletePrevious = document.querySelectorAll(".bookcard");
    //Resets everytime this functions is called. Deletes previous cards and makes new cards.
    Array.prototype.forEach.call( deletePrevious, function(node) {
       node.parentNode.removeChild(node); 
    });
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let div = document.createElement('div');
        div.setAttribute("id", `${i}`);
        div.classList.add("bookcard");

        let cardHeader = document.createElement('div');
        cardHeader.classList.add("cardheader");
        let eyeSymbol = document.createElement('img');
        let deleteSymbol = document.createElement('img');
        eyeSymbol.setAttribute("src", "./SVG/eye.svg");
        deleteSymbol.setAttribute("src", "./SVG/delete.svg");
        deleteSymbol.classList.add("deleteSymbol");
        eyeSymbol.classList.add("eyeSymbol");
        cardHeader.appendChild(eyeSymbol);
        cardHeader.appendChild(deleteSymbol);

        //Event listener for eye symbol
        eyeSymbol.addEventListener("click", ()=>{
            if(book.read) {
                book.read = false;
            }
            else {
                book.read = true;
            }
            displayLibrary();
        })

        //Event listener for delete symbol
        deleteSymbol.addEventListener("click", ()=>{
            div.remove();
            //find the correct book and delete from array
            for(let j = 0; j < myLibrary.length; j++) {
                if(myLibrary[j] === book) {
                    myLibrary.splice(j, 1);
                }
            }
        })

        let cardText = document.createElement('div');
        cardText.classList.add("cardtext")

        let titleName = document.createElement('h2');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');
        let info = document.createElement('h3');

        titleName.textContent = book.title;
        author.textContent = "Author: " + book.author;
        pages.textContent = "Pages: " + book.pages;
        read.textContent = "Has been read: " + book.read;
        info.textContent = book.info();

        cardText.appendChild(titleName);
        cardText.appendChild(author);
        cardText.appendChild(pages);
        cardText.appendChild(read);
        cardText.appendChild(info);

        //Adds content to the bookcard in the correct order
        div.appendChild(cardHeader);
        div.appendChild(cardText);
        cards.appendChild(div);
    }
}

displayLibrary();