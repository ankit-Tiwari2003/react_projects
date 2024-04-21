import { Newform } from './Newform'
import { useEffect, useState } from 'react'
import './App.css'
import { Todolist } from './Todolist'

function App() {

useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todo))
})

const [todo,settodo] = useState(()=>{
  const localValue = localStorage.getItem("ITEMS")
  if(localValue == null)return []

  return JSON.parse(localValue)
})

function addtodo(title){
  settodo(currentTodo => {
    return [
      ...currentTodo,{id:crypto.randomUUID(), title , completed: false},
    ]
  })
}
function toggleTodo(id,completed){
  settodo(currentTodo => {
    return currentTodo.map(todo => {
      if(todo.id ===id){
        return{...todo,completed}
      }
      return todo
    })
  })
}

function deletetodo(id){
  settodo(currentTodo => {
    return currentTodo.filter(todo => todo.id !== id)
  })
}

  return (
    <>
      <Newform onSubmit ={addtodo}/>


      <h1 className="header">Todo list</h1>
      
      <Todolist todo={todo} toggleTodo={toggleTodo} deletetodo={deletetodo}/>
    </>
  )
}

export default App
