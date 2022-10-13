// const TodoItem = (todo) => {
//     return (`
//         <li>${todo}</li>
//     `);
// }
// export default TodoItem;


// const TodoItem = (todo) => {
//     return (`
//         <li>
//             ${todo.title}
//             (${todo.status})
//         </li>
//     `);
// }
// export default TodoItem;

const TodoItem = (todo) => {
    return (`
      <li>
        <input type="checkbox"
          ${todo.done ? 'checked' : ''}/>
        ${todo.title}
        (${todo.status})
      </li>`);
}
export default TodoItem;