export function Todoitem({id,completed,title,toggleTodo,deletetodo}){
    return(

<li key={id}>
            <label htmlFor="">
          <input type="checkbox" checked={completed}
          onChange={e=> toggleTodo(id,e.target.checked)} />{title}
          </label>
          <button onClick={()=>deletetodo(id)} className="del-btn">Delete</button>
          </li>

    )
}