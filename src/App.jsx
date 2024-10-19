import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import Footer from "./components/Footer"

function App() {

  const [todos, setTodos] = useState([])

  useEffect(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20")
    // console.log(response.data)
    setTodos(response.data)
  }, [])

  const toggleComplete = (id) => {
    // console.log("toggle complete", id)
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = (id) => {
    // console.log("delete", id)
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addTodo = async (todo) => {
    // console.log("add", todo)
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", todo)
    // console.log(response.data)
    setTodos([response.data, ...todos])
  }

  return (
    <div className="bg-slate-100 h-screen py-4">
      <div className="w-5/6 md:w-3/4 lg:w-1/2 h-full mx-auto rounded-xl bg-white shadow-xl">
        <Header/>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
