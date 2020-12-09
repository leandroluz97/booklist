class StoreLocal {
  addBookLS(book) {
    let bookStorage;
    if (localStorage.getItem('Books') === null) {
      bookStorage = [];
    } else {
      bookStorage = JSON.parse(localStorage.getItem('Books'));
    }

    bookStorage.push(book);
    localStorage.setItem('Books', JSON.stringify(bookStorage));
  }

  loadBookLS() {
    let bookStorage = [];
    bookStorage = JSON.parse(localStorage.getItem('Books'));

    bookStorage.forEach((book) => {
      const tableBody = document.querySelector('.body');
      const divRow = document.createElement('div');
      divRow.setAttribute('class', 'body__row');
      tableBody.appendChild(divRow);

      divRow.innerHTML += `
          <div class="body__col">${book.title.substring(0, 20)}</div>
          <div class="body__col">${book.author.substring(0, 10)}</div>
          <div class="body__col">#${book.isbn}</div>
          <div class="body__col">${book.publisher.substring(0, 10)}</div>
          <div class="body__col"><i class="fas fa-times" id="delete"></i></div>
          `;
    });
  }

  deleteBookLS(e) {
    const books = document.querySelectorAll('.body__row');
    let bookStorage = [];
    bookStorage = JSON.parse(localStorage.getItem('Books'));
    books.forEach((book, index) => {
      if (book == e) {
        bookStorage.splice(index, 1);
        localStorage.setItem('Books', JSON.stringify(bookStorage));
      }
    });
  }
}
