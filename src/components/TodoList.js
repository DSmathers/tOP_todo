import React from 'react';
import { getTodos, removeTodo, addTodo } from '../services/LocalStorageServices'



const TodoList = () => {
    let todoList = getTodos();
    const handleAddToDo = (e) => {
        e.preventDefault();
        let newToDo = document.getElementById('new_item').value;
        console.log(newToDo);
        addTodo(newToDo);
    }
    return (
        <>   
            <ul id="list_main">
               {todoList && todoList.map((todo => {
                   return ( 
                       <li key={todo} className="todoList_item">
                            <span id={todo} className="todoList_todo">{todo}</span>
                            <button onClick={removeTodo} value={todo} className="todoList_removeBtn"> &#10004; </button>
                        </li>
                   )
               }
               ))}
               <li>
                   <form>
                       <input type="text" placeholder="Add New Item" id="new_item"></input>
                       <button type="submit" onClick={handleAddToDo}> + </button>
                   </form>
               </li>
            </ul>
        </>
    )
}

export default TodoList
