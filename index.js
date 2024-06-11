const bookTable = document.querySelector(".bookTable");
const bookList = document.querySelector(".bookList");
const modal = document.querySelector(".modal");
const openDialog = document.querySelector(".addBook");
const closeDialog = document.querySelector(".add");

// All of your book objects are going to be stored in an array,

function Book(title, author, noOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.isRead = isRead;
}

const book1 = new Book("Harry Potter", "JK Rowling", 350, true);
const book2 = new Book("Gone with the wind", "Margaret Mitchell", 500, false);

const myLibrary = [book1, book2];

//so add a function to the script (not the constructor) that can take user’s input
//and store the new book objects into an array.
function addBookToLibrary() {}

function createTableCell(content) {
  const cell = document.createElement("td");
  cell.textContent = content;
  return cell;
}

/*Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. 
It might help for now to manually add a few books to your array so you can see the display. */
function getBooks() {
  myLibrary.forEach((ele) => {
    const row = document.createElement("tr");
    row.appendChild(createTableCell(ele.title));
    row.appendChild(createTableCell(ele.author));
    row.appendChild(createTableCell(ele.noOfPages));
    row.appendChild(createTableCell(ele.isRead));
    bookList.appendChild(row);
  });
  bookTable.setAttribute("border", "1");
}

getBooks();

//Dialog
openDialog.addEventListener("click", () => {
  modal.showModal();
});

closeDialog.addEventListener("click", () => {
  modal.close();
});
