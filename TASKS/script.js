// elementos html de la seccion para agregar las tareas

const inpNameTask = document.getElementById("input--name");
const inpDescTask = document.getElementById("description-input");
const btnCancelTask = document.getElementById("btn--cancel");
const btnAddTask = document.getElementById("btn--add");

// functions

const addTask = () => {
  let nameTask = inpNameTask.value;
  let descTask = inpDescTask.value;
  createTaskCard(nameTask, descTask);
};

const cancelTask = () => {
  inpNameTask.value = "";
  inpDescTask.value = "";
};

const createTaskCard = (name, description) => {
  let sectionTaskContainer = document.getElementById("added--task");
  let containerCard = document.createElement("div");
  let titleCard = document.createElement("h4");
  let paragraphCard = document.createElement("p");
  let btnCard = document.createElement("button");

  containerCard.classList.add("added--task-cont");
  titleCard.classList.add("name--added-task");
  paragraphCard.classList.add("desc--added-taskt");
  btnCard.classList.add("btn--delete-added");
  btnCard.setAttribute("id", "btn--delete-added");
  btnCard.setAttribute("name", "btn--delete");

  titleCard.innerText = name;
  paragraphCard.innerText = description;
  btnCard.innerText = "Delete Task";

  containerCard.appendChild(titleCard);
  containerCard.appendChild(paragraphCard);
  containerCard.appendChild(btnCard);
  sectionTaskContainer.appendChild(containerCard);

  let target = document.querySelectorAll(".btn--delete-added");

  target.forEach(element => {
    element.addEventListener("click" , ()=>{
      // console.log(element.id)
      deleteTask(element);
    })
  });
  setTimeout(cancelTask , 500)
};

const deleteTask = (el) => {
  if (el.name === "btn--delete") {
    el.parentElement.remove()
  }
};

// eventListeners

btnAddTask.addEventListener("click", () => {
  if (inpNameTask.value != "" && inpDescTask.value != "") {
    addTask();
  }else if (inpNameTask.value == "" || inpDescTask.value == "") {
    alert("Ingresa una tarea con nombre y descripcion")
  }
});

btnCancelTask.addEventListener("click", () => {
  cancelTask();
});
