
const BookCollection = [];
const Booklist= document.querySelector('.book-list');

const AuthorValue = document.querySelector('.author')
const TitleValue = document.querySelector('.title')

const AddButton = document.querySelector('#add-button')

AddButton.addEventListener('click', ()=>{

 
  const Author = document.createElement ('li')
  const Title = document.createElement ('li')
  Author.innerHTML=AuthorValue.value
  Title.innerHTML=TitleValue.value
  Booklist.appendChild(Author)
  Booklist.appendChild(Title)

});
