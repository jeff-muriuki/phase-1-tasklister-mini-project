
document.addEventListener('DOMContentLoaded', () => {
  //your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=> {
      e.preventDefault()
      buildToDo(document.getElementById('new-task-description').value);
      // or buildToDo(e.target.new-task-description.value) didnt work here though
      form.reset()
  })

  })
function buildToDo(todo) {
  let li = document.createElement('li')
  let btn= document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent= ' X'
  li.textContent=todo;
  document.querySelector('#tasks').appendChild(li)
li.appendChild(btn);
  
}
function handleDelete(e) {
  e.target.parentNode.remove()
}