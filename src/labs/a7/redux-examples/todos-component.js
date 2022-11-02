import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const [todo, setTodo] = useState({do: ''});
  const dispatch = useDispatch();
  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo))
  }
  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index))
  }
  const createTodoClickHandler = () => {
    dispatch(addTodo(todo))
  }
  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue
    };
    setTodo(newTodo);
  }

 return(
    <>
     <h3>Todos</h3>

     <ul className="list-group">
      <li className="list-group-item">
      <button onClick={createTodoClickHandler}
               className="btn btn-primary w-25 
                          float-end">
         Create</button>
        <input
          onChange={todoChangeHandler}
          value={todo.do}
          className="form-control w-75"/>
      </li>
      <ul className="list-group">
        {
          todos.map((todo, index) =>
            <li className="list-group-item">
              <button 
                onClick={() => deleteTodoClickHandler(index)}
                className="btn btn-danger float-end ms-2">
                Delete
              </button>
              <input type="checkbox"
                  checked={todo.done}
                  onChange={() => 
                  toggleTodoDone(todo)}
                  className="me-2"/>
              {todo.do}
            </li>
          )
        }
      </ul>
     </ul>
   </>
  );
 };
 export default Todos;
 
