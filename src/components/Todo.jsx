import { FaCheck, FaRegTrashAlt } from "react-icons/fa"

function Todo({todo, toggleComplete, deleteTodo}) {
  return (
    <li className="list-none px-4 py-2 my-1 bg-slate-100 hover:bg-slate-200 rounded-md flex flex-row justify-between items-center" onDoubleClick={() => toggleComplete(todo.id)}>
      <span className={`${todo.completed? "text-green-500 line-through" : ""} flex flex-row justify-start items-center`}>
        <span className={`${todo.completed? "mr-2" : ""}`}>{todo.completed && <FaCheck/>}</span>
        {todo.title}
      </span>
      <FaRegTrashAlt style={{cursor: "pointer"}} className="text-slate-600 hover:text-red-500" onClick={() => deleteTodo(todo.id)}/>
    </li>
  )
}

export default Todo