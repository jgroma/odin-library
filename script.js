const addBtn = document.getElementById("add-book")
const formContainer = document.getElementById("form-container")
const submitBtn = document.getElementById("submit")

let myLibrary = [];


function Book(title, author, pages, year, status) {
    //the constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.year = year
    this.status = status

};

//dummy books to test the constructor code
const hp1 = new Book("Harry Potter and the Philosopher's Stone",
"J. K. Rowling", 233, 1997, "Read");

function addBookToLibrary() {

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
}

submitBtn.addEventListener("click", function() {
    hideForm()
})