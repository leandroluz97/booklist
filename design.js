class Design {
  addBook(book) {
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
  }

  clearInput() {
    let title = (document.querySelector('#title').value = '');
    let author = (document.querySelector('#author').value = '');
    let isbn = (document.querySelector('#isbn').value = '');
    let publisher = (document.querySelector('#publisher').value = '');
  }

  removeBook(e) {
    if (e.id == 'delete') {
      const book = e.parentElement.parentElement;
      book.classList.add('fall');
      book.addEventListener('transitionend', () => {
        book.remove();
      });
    }
  }
}
