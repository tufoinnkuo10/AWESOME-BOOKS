
const BookCollection = [];
const Booklist= document.querySelector('.book-list');

const AuthorValue = document.querySelector('.author')
const TitleValue = document.querySelector('.title')

const AddButton = document.querySelector('#add-button')

AddButton.addEventListener('click', ()=>{

  const Books= document.createElement('ul')
  Booklist.appendChild(Books)

 
  const Author = document.createElement ('li')
  const Title = document.createElement ('li')
  const Remove = document.createElement('input')
  const line = document.createElement('hr')
  const Break = document.createElement('br')

  Books.appendChild(Author)
  Books.appendChild(Title)
  Books.appendChild(Remove)
  Books.appendChild(line)
  Books.appendChild(Break)

  Remove.setAttribute('type','button')
  Remove.setAttribute('value','Remove')
  Remove.addEventListener('click', ()=>{
    Booklist.removeChild(Books)
  })
  Author.innerHTML=AuthorValue.value
  Title.innerHTML=TitleValue.value
 


});
