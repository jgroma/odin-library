const addBtn = document.getElementById("add-book")
const formContainer = document.getElementById("form-container")
const submitBtn = document.getElementById("submit")
const form = document.getElementsByTagName("form")

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


function Book(title, author, pages, year, status) {
    //the constructor
    this.title = title
    this.author = author || "Unknown"
    this.pages = pages || "Unknown"
    this.year = year  || "Unknown"
    this.status = status

};


function addBookToLibrary() {
    getFormData();
    const book = new Book(title, author, pages, year, status);
    //console.table(book);
    myLibrary.push(book);
};

//POP-UP FORM
function showForm () {
    formContainer.classList.remove("invisible-form");
};

addBtn.addEventListener("click", function () {
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

