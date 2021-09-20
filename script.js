const Booklist = document.querySelector('.book-list');
const AuthorValue = document.querySelector('.author');
const TitleValue = document.querySelector('.title');
const AddButton = document.querySelector('#add-button');
const inputs = document.querySelectorAll('.author, .title');

const saveData = (user, data) => localStorage.setItem(user, JSON.stringify(data));
const getData = (user) => JSON.parse(localStorage.getItem(user));

inputs.forEach((e) => {
  e.addEventListener('input', () => {
    const user = {
      author: AuthorValue.value || 'Your book doesn\'t have an Author',
      book: TitleValue.value || 'Your book doesn\'t have a Title',
    };
    saveData('libraryData', user);
  });
});

AddButton.addEventListener('click', () => {
  const Books = document.createElement('ul');
  Booklist.appendChild(Books);

  const Author = document.createElement('li');
  const Title = document.createElement('li');
  const Remove = document.createElement('input');
  const line = document.createElement('hr');
  const Break = document.createElement('br');

  const libraryData = getData('libraryData');
  if (libraryData !== null) {
    Author.innerHTML = libraryData.author;
    Title.innerHTML = libraryData.book;
  }

  Books.appendChild(Author);
  Books.appendChild(Title);
  Books.appendChild(Remove);
  Books.appendChild(line);
  Books.appendChild(Break);

  Remove.setAttribute('type', 'button');
  Remove.setAttribute('value', 'Remove');
  Remove.addEventListener('click', () => {
    Booklist.removeChild(Books);
  });
  AuthorValue.value = null;
  TitleValue.value = null;
});
