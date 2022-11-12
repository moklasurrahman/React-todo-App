import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState("")

    const handelInput = (e) => {
        setTodo(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        props.onTodo(todo)
    }

  return (
    <div>
        <form onSubmit={submitForm}>
            <label htmlFor='todo'>input your Todo: </label>
            <input type="text" name='todo' id='todo' value={todo} onChange={handelInput}></input>
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default NewTodo