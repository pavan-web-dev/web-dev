const data = [
    {
      _id: "123",
      do: "Accelerate the world's transition to sustainable energy",
      done: false
    },
    {
      _id: "234",
      do: "Reduce space transportation costs to become a spacefaring civilization",
      done: false
    },
   ];
   
   const todosReducer = (state = data, action) => {
       switch(action.type) {
           case 'create-todo':
               const newTodo = {
                   ...action.todo,
                   _id: (new Date()).getTime() + ""
               }
               return [
                   ...state,
                   newTodo
               ]
            case 'delete-todo':
                return state.filter(todo => todo != action.todo);

            case 'update-todo':
                const newTodos = state.map(td => {
                    const newTodo = td._id === action.todo._id ? action.todo : td;
                    return newTodo
                });
                return newTodos;
            default:
                return state
            } 
   }
   
   export default todosReducer;