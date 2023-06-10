//DOM element variables
const addBtn = document.getElementById("add-book");
const formContainer = document.getElementById("form-container");
const submitBtn = document.getElementById("submit");
const form = document.getElementsByTagName("form");
const gridContainer = document.getElementById("grid-container");

//POP-UP FORM
function showForm () {
    formContainer.classList.remove("invisible-form");
};

addBtn.addEventListener("click", function () {
    form[0].reset()
    showForm()
});

function hideForm () {
    formContainer.classList.add("invisible-form");

};

submitBtn.addEventListener("click", function() {
    //stop form submission
    event.preventDefault();

    hideForm()
    addBookToLibrary();
});

//FORM DATA
let title;
let author;
let pages;
let year;
let status;

function getFormData() {
    title = document.getElementById("title").value
    author = document.getElementById("author").value
    pages = document.getElementById("pages").value
    year = document.getElementById("year").value
    status = document.getElementById("status").value
  }


let myLibrary = [];

//object constructor refactored to class syntax
class Book {
    constructor(title, author, pages, year, status) {
      this.title = title
      this.author = author || "Unknown"
      this.pages = pages || "Unknown"
      this.year = year  || "Unknown"
      this.status = status;
    }
}

//adds new book object to myLibrary array
function addBookToLibrary() {
    getFormData();
    const book = new Book(title, author, pages, year, status);
    if (title != "") {
        myLibrary.push(book);
        displayCards(myLibrary);
    } else {
        alert("Book title is required.")
    };
};

/*iterates through myLibrary array 
to make and display cards for all book objects*/
function displayCards(array) {
    //to avoid duplicating book cards
    gridContainer.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        makeCard(array[i]);

    }

};

//make a card for each object
function makeCard(book) {

            const card = document.createElement("div");
            card.classList.add("card");
            gridContainer.appendChild(card)

            const header = document.createElement("h1");
            header.classList.add("title");
            header.textContent = book.title;
            card.appendChild(header)

            const ul = document.createElement("ul");
            card.appendChild(ul);

            const liAuthor = document.createElement("li");
            ul.appendChild(liAuthor);
            const authorLabel = document.createElement("p");
            authorLabel.textContent = "Author";
            const authorData = document.createElement("p");
            authorData.classList.add("author");
            authorData.textContent = book.author;
            liAuthor.appendChild(authorLabel);
            liAuthor.appendChild(authorData);

            const liPages = document.createElement("li");
            ul.appendChild(liPages);
            const pagesLabel = document.createElement("p");
            pagesLabel.textContent = "Pages";
            const pagesData = document.createElement("p");
            pagesData.classList.add("pages");
            pagesData.textContent = book.pages;
            liPages.appendChild(pagesLabel);
            liPages.appendChild(pagesData);

            const liYear = document.createElement("li");
            ul.appendChild(liYear);
            const yearLabel = document.createElement("p");
            yearLabel.textContent = "Year";
            const yearData = document.createElement("p");
            yearData.classList.add("year");
            yearData.textContent = book.year;
            liYear.appendChild(yearLabel);
            liYear.appendChild(yearData);

            const liStatus = document.createElement("li");
            liStatus.classList.add("status-container")
            ul.appendChild(liStatus);
            const statusLabel = document.createElement("p");
            statusLabel.textContent = "Status";
            liStatus.appendChild(statusLabel);
            const statusBtnContainer = document.createElement("p");
            liStatus.appendChild(statusBtnContainer);

            const statusBtn = document.createElement("button");
            statusBtn.classList.add("status-btn")
            statusBtn.textContent = book.status
            statusBtnContainer.appendChild(statusBtn);

            //changes read status of both the book object and card
            book.toggleButton = function () {
                if (book.status === "Read") {
                    book.status = "TBR"
                    
                    statusBtn.textContent = "TBR"
                } else {
                    book.status = "Read"
                    statusBtn.textContent = "Read"
                };
                
            };

            statusBtn.addEventListener("click", function () {
                book.toggleButton();
            })

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete"
            deleteBtn.classList.add("delete-btn");
            card.appendChild(deleteBtn);


            deleteBtn.addEventListener("click", function() {
                //this removes the correct book object from the array
                myLibrary.splice(myLibrary.indexOf(book), 1)
                //this removes the correct card
                card.remove();
                console.table(myLibrary)
            })

};

//FORM VALIDATION
//doesn't work yet
let currentYear = new Date().getFullYear();
//let stringCurrentYear = currentYear.toString();

const yearInput = document.getElementById("year");
yearInput.setAttribute("max", currentYear);

/*the code below would cause a bug preventing the user from typing a higher digit
for every digit in the currenYear number (2023, so the 1st number
cannot be higher than 2, 2nd than 0, 3rd than 2, 4th than 4)*/

//yearInput.setAttribute("onkeyup", "if(value>max) value=0;");
