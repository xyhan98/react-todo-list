import Todo from "./Todo"

function TodoList({todos, toggleComplete, deleteTodo}) {
  return (
    <div className="mx-4 my-4 h-2/3 overflow-auto">
      {todos.map(todo => <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>)}
    </div>
  )
}

export default TodoList