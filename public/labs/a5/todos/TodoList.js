import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

const TodoList = () => {
    return(`
        <ul>
            ${todos.map((item) => {
                return(`
                ${TodoItem(item)}
                `)
            }).join('')}
        </ul>
    `);
}
export default TodoList;
