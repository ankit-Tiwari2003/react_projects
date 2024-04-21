import { Todoitem } from "./TodoItem"

export function Todolist({todo, toggleTodo, deletetodo}){
    return (

<ul className="list">
        {todo.length === 0 && "No Todos"}
        {todo.map(todo =>{
          return (
          <Todoitem {...todo} key={todo.id} toggleTodo={toggleTodo} deletetodo = {deletetodo} />
          )
        })}
        
      </ul>

    )
}