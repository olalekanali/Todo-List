let toDoButton = document.querySelector('#addTodo');
let toDoContainer = document.querySelector('#TodoContainer');
let inputField = document.querySelector('#inputField');

toDoButton.addEventListener('click', () => {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})