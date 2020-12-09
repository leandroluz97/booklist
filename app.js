//UI variables
const bookForm = document.querySelector('#book-form');
const table = document.querySelector('.table');

//Submit new Book
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //UI variables
  let title = document.querySelector('#title').value.replace(/<[^>]*>/g, '');
  let author = document.querySelector('#author').value.replace(/<[^>]*>/g, '');
  let isbn = document.querySelector('#isbn').value.replace(/<[^>]*>/g, '');
  let publisher = document
    .querySelector('#publisher')
    .value.replace(/<[^>]*>/g, '');

  // Instanciate Classes
  let book = new Books(title, author, isbn, publisher);
  let design = new Design();
  let storage = new StoreLocal();

  //Validations
  if (title && author && publisher && isbn !== '') {
    design.addBook(book);
    storage.addBookLS(book);
    design.clearInput();
  }
});

//delete book
table.addEventListener('click', (e) => {
  //instanciate classes
  let storage = new StoreLocal();
  let design = new Design();

  //call methods
  storage.deleteBookLS(e.target.parentElement.parentElement);
  design.removeBook(e.target);
});

//Load LocalStorage data
document.addEventListener('DOMContentLoaded', (e) => {
  let storage = new StoreLocal();
  storage.loadBookLS();
});
