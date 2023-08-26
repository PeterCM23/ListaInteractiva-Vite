const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter' && taskInput.value.trim()!==''){
        addTask(taskInput.value)
        taskInput.value = ''
    }
})

function addTask(taskText){
    const taskItem = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox,addEventListener('change',function(){
        taskItem.classList.toogle('completed', this.checked)
    })

    const taskTextElement = document.createElement('span')
    taskTextElement.textContent = taskText

    const deleteButton = document.createElement('button')
    deleteButton.textContent='Eliminar'
    deleteButton.addEventListener('click', function(){
        taskItem.remove()
    })
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem)

}