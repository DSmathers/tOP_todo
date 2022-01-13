

export const getTodos = () => {
    let todos = JSON.parse(localStorage.getItem('todos')); 
    if(null === todos){
        todos = [];
    }
    return todos;
}

export const addTodo = (newTodo) => {
    let newList = [];
    let todos = getTodos();
    todos.map((item => {
        newList.push(item);
    }))
    newList.push(newTodo)
    localStorage.setItem('todos', JSON.stringify(newList));
    window.location.reload();
    return;
}

export const removeTodo = (e) => {
    let oldList = getTodos();
    for(let i = 0; i<oldList.length; i++){
        if(oldList[i] === e.target.value){
            oldList.splice(i, 1);
        }
    }
    localStorage.setItem('todos', JSON.stringify(oldList));
    window.location.reload();
    return;
}


