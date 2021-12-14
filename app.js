function getTodo() {
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");

    var li = document.createElement("li")
    var todoValue = document.createTextNode(todo.value);
    todo.value = "";
    li.appendChild(todoValue);
    list.appendChild(li);

    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Delete");
    btn.appendChild(btnTxt);
    btn.setAttribute("onclick","deleteTodo(this)");
    li.appendChild(btn);

    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Edit");
    btn.appendChild(btnTxt);
    btn.setAttribute("onclick","editTodo(this)");
    li.appendChild(btn);

}


function deleteTodo(e){
    e.parentNode.remove();
}

function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}

function editTodo(e){
    var prev = e.parentNode.firstChild.nodeValue;
    var update = prompt("Edit Todo", prev);
    e.parentNode.firstChild.nodeValue = update;
}