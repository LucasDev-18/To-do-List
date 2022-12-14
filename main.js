const input = document.querySelector(".taskInput")
const addTaskButton = document.querySelector(".buttonTask")
const message = document.querySelector(".notValid")
const tasksConteiner = document.querySelector(".tasks")

addTaskButton.addEventListener("click", () => handleAddTask())

addTaskButton.addEventListener("click", () => handleInputChange())

addTaskButton.addEventListener('click', () => checkTaskInput())


const validateInput = () => input.value.trim().length > 0

const handleAddTask = () => {
  const inputValid = validateInput()

  if (!inputValid) {
    return input.classList.add('error')
  }

/*Adicionar a tarefa*/
  const newTaskContent = document.createElement("div")
  newTaskContent.classList.add("task-item")

/*A tarefa*/
  const taskContent = document.createElement("p")
  taskContent.innerText = input.value
  taskContent.addEventListener("click", () => handleClick(taskContent))

/*Deletar a tarefa*/

const deleteTask = document.createElement("i")
deleteTask.classList.add("fa-solid")
deleteTask.classList.add("fa-trash-can")
deleteTask.addEventListener("click", () => handleDeleteClick(newTaskContent, taskContent))

  newTaskContent.appendChild(taskContent)
  newTaskContent.appendChild(deleteTask)
  tasksConteiner.appendChild(newTaskContent) //a var pegou o seletor e aqui ele pegou o newTask que já estava com os appendChild

}

const handleClick = (taskContent) => {
  const tasks = tasksConteiner.childNodes

  for (const task of tasks) {
    const taskWasClicked = task.firstChild === (taskContent)

    if (taskWasClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
}

const handleDeleteClick = (newTaskContent, taskContent) => {
  const tasks = tasksConteiner.childNodes

  for(const task of tasks) {
    const deleteBtnClicked = task.firstChild === (taskContent)
    if (deleteBtnClicked) {
      newTaskContent.remove()
    }
  }
}

const handleInputChange = () => {
  const inputValid = validateInput()

  if (inputValid) {
    return input.classList.remove('error')
  }
}


function checkTaskInput(params) {
  const inputValue = input.value

  if (inputValue === "") {
    setFail('Insira uma tarefa')
  } else {
    setSucess("")
  }
}

const setFail = (message) => {
  const failText = document.querySelector(".notValid")
  failText.innerText = message
  failText.classList.add("falha")
}

const setSucess = (message) => {
  const failText = document.querySelector(".notValid")
  failText.innerText = message
  failText.classList.remove("falha")
}
