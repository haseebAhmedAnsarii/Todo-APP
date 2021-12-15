var list = document.getElementById("list");

firebase.database().ref('todos').on('child_added',function(data){
    var li = document.createElement("li")
    var todoValue = document.createTextNode(data.val().value);
    li.appendChild(todoValue);
    list.appendChild(li);

    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Delete");
    btn.appendChild(btnTxt);
    btn.setAttribute("id",data.val().key)
    btn.setAttribute("onclick","deleteTodo(this)");
    li.appendChild(btn);

    var btn = document.createElement("button");
    var btnTxt = document.createTextNode("Edit");
    btn.appendChild(btnTxt);
    btn.setAttribute("id",data.val().key)
    btn.setAttribute("onclick","editTodo(this)");
    li.appendChild(btn);

})

function getTodo() {

    var todo_item = document.getElementById("todo");

    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var todo = {
        value: todo_item.value,
        key : key
    }

    database.child(key).set(todo)
    
    todo_item.value = "";
    
    
    
}


function deleteTodo(e){
    firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove();
}

function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
    firebase.database().ref('todos').remove();
}

function editTodo(e){
    var prev = e.parentNode.firstChild.nodeValue;
    var update = prompt("Edit Todo", prev);

    var editTodo = {
        value: update,
        key: e.id
    }

    firebase.database().ref("todos").child(e.id).set(editTodo)

    e.parentNode.firstChild.nodeValue = update;
}