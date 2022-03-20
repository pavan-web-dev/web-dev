import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <ul>
            {todos.map((item) => {
                return(
                <TodoItem todo = {item} />
                );
            })
        }
        </ul>
    );
}
export default TodoList;
