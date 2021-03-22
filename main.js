var invalidFeedback = document.querySelector(".invalid-feedback");
var addTask = document.getElementById("addTask");
var toDo = document.getElementById("todos");
var dones = document.getElementById("dones");
var toDoInput = document.getElementById("todo-input");


// mygtuku function
function buttonCreate(text, text1) {    
    let button = document.createElement("button");
    button.classList.add(text);
    button.innerText = text1;
    return button;
}
// pridedam taska
addTask.addEventListener('click', () => {
    var taskValue = document.getElementById("todo-input").value;    
    if (taskValue == "") {
        invalidFeedback.style.display = "block";
        toDoInput.style.borderColor = "#dc3545"
    } else {    
    var div = document.createElement("div");
    var h4 = document.createElement("h4")
    h4.innerText = taskValue;
    div.appendChild(h4);
    div.appendChild(buttonCreate("Delete", "Delete"));
    div.appendChild(buttonCreate("MoveToDone", "Move to Done"));
    toDo.appendChild(div);    
    document.getElementById("todo-input").value = "";
    var button1 = document.querySelectorAll(".Delete");
    var button2 = document.querySelectorAll(".MoveToDone");
    for (i = 0; i < button1.length; i++) {
        button1[i].classList.add("btn", "btn-danger");        
    }
    for (i = 0; i < button2.length; i++) {
        button2[i].classList.add("btn", "btn-success");        
    }
    }    
})
// istrinam taska
toDo.addEventListener("click", (e) => {
    if (e.target.classList.contains("Delete")) {
        e.target.closest("div").remove();
    }
})
// permetam taska
toDo.addEventListener("click", (e) => {
    if (e.target.classList.contains("MoveToDone")) {
        var taskInfo = e.target.closest("div").children[0].innerText       
        var div = document.createElement("div");
        var h4 = document.createElement("h4")
        h4.innerText = taskInfo;
        div.appendChild(h4);
        div.appendChild(buttonCreate("Delete", "Delete"));
        div.appendChild(buttonCreate("MoveBack", "Move Back"));
        dones.appendChild(div);
        e.target.closest("div").remove();
        var button1 = document.querySelectorAll(".Delete");
        var button3 = document.querySelectorAll(".MoveBack");
        for (i = 0; i < button1.length; i++) {
            button1[i].classList.add("btn", "btn-danger");        
        }
        for (i = 0; i < button3.length; i++) {
            button3[i].classList.add("btn", "btn-success");        
        }   
    }
})
// trinam permesta taska
dones.addEventListener("click", (e) => {
    if (e.target.classList.contains("Delete")) {
        e.target.closest("div").remove();
    }
})
// grazinam atgal taska
dones.addEventListener("click", (e) => {
    if (e.target.classList.contains("MoveBack")) {
        var taskInfo = e.target.closest("div").children[0].innerText       
        var div = document.createElement("div");
        var h4 = document.createElement("h4")
        h4.innerText = taskInfo;
        div.appendChild(h4);
        div.appendChild(buttonCreate("Delete", "Delete"));
        div.appendChild(buttonCreate("MoveToDone", "Move to Done"));
        toDo.appendChild(div);
        e.target.closest("div").remove();
        var button1 = document.querySelectorAll(".Delete");
        var button2 = document.querySelectorAll(".MoveToDone");
        for (i = 0; i < button1.length; i++) {
            button1[i].classList.add("btn", "btn-danger");        
        }
        for (i = 0; i < button2.length; i++) {
            button2[i].classList.add("btn", "btn-success");        
        }  
    }
})