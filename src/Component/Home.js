import React, { useState } from 'react'
import NewTodo from './NewTodo'
import { Todos } from './Todos'

const todosDummey = ["todo1", "todo2"]
const Home = () => {

    const [todos, setTodos] = useState(todosDummey)


    const handelNewTodo = (newTodo) => {
        // console.log(newTodo)
        setTodos([...todos, newTodo])
    }
  return (
    <div>
        <NewTodo onTodo={handelNewTodo}></NewTodo>
        <Todos todos={todos}></Todos>
        
    </div>
  )
}

export default Home