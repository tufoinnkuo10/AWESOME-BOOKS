class BookList {
  constructor() {
    this.list = [];
  }

  addBook(book) {
    this.list.push(book);
    localStorage.setItem("books", JSON.stringify(this.list));
    this.displayBooks();
  }

  removeBook(id) {
    this.list = this.list.filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(this.list));
    this.displayBooks();
  }

  displayBooks() {
    const result = document.getElementById("Result");
    result.innerHTML = "";
    this.list.forEach((book) => {
      result.appendChild(this.bookElement(book));
    });
  }

  bookElement(book) {
    const li = document.createElement("li");
    li.classList.add("book-container");

    const title = document.createElement("h5");
    title.classList.add("book-title");

    const author = document.createElement("h5");
    author.classList.add("author-name");

    const by = document.createElement("p");
    by.classList.add("byclass");

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-button");

    removeBtn.addEventListener("click", () => this.removeBook(book.id));
    title.innerText = book.title;
    author.innerText = book.author;
    by.innerText = "by ";
    removeBtn.innerText = "remove";
    title.classList.add("title");
    li.appendChild(title);
    li.appendChild(by);
    li.appendChild(author);
    li.appendChild(removeBtn);
    return li;
  }
}

const library = new BookList();

window.addEventListener("load", () => {
  const form = document.getElementById("booksForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("bookTitle");
    const author = document.getElementById("bookAuthor");
    if (!(author.value && title.value)) {
      return;
    }
    const book = {
      title: title.value || "This book doesn't have a title!",
      author: author.value || "This book doesn't have an author!",
      id: Date.now(),
    };
    library.addBook(book);
    title.value = null;
    author.value = null;
  });

  const books = localStorage.getItem("books");
  if (books) {
    library.list = JSON.parse(books);
  }
  library.displayBooks();
});

const listDisplay = document.querySelector(".menu-list");
const addDisplay = document.querySelector(".menu-add");
const formDisplay = document.querySelector(".form");
const bookDisplay = document.querySelector(".list-display");
const contactDisplay = document.querySelector(".menu-contact");
const contact = document.querySelector(".contact");

listDisplay.addEventListener("click", function () {
  formDisplay.classList.add("d-none");
  bookDisplay.classList.remove("d-none");
  contact.classList.add("d-none");
});

addDisplay.addEventListener("click", function () {
  formDisplay.classList.remove("d-none");
  bookDisplay.classList.add("d-none");
  contact.classList.add("d-none");
});

contactDisplay.addEventListener("click", function () {
  formDisplay.classList.add("d-none");
  bookDisplay.classList.add("d-none");
  contact.classList.remove("d-none");
});
