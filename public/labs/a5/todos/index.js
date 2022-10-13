// alert('Hello World!');
// import TodoList from "./TodoList.js";
// import TodoItem from "./TodoItem.js";

// // $('#wd-todo').append(`
// //    <div class="container">
// //        <h1>Todo example</h1>
// //    </div>
// // `);

// // $('#wd-todo').append(`
// //    <div class="container">
// //        <h1>Todo example</h1>
// //        ${TodoList()}
// //    </div>
// // `);

// const TodoList = () => {
//     return (`
//         <ul>
//             ${TodoItem('Buy milk')}
//             ${TodoItem('Pickup the kids')}
//             ${TodoItem('Walk the dog')}
//         </ul>
//     `);
// }
// export default TodoList;


// import TodoItem from "./TodoItem.js";
// import todos from "./todos.js";
// const TodoList = () => {
//     return (`
//       <ul>
//          ${
//             todos.map(todo => {
//                return(TodoItem(todo));
//             }).join('')
//          }
//       </ul>
//    `);
// }
// export default TodoList;

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