import { useState } from "react"

function AddTodo({addTodo}) {

  const [title, setTitle] = useState("")

  const onClick = () => {
    addTodo({title, completed: false})
    setTitle("")
  }

  return (
    <div className="mx-4 my-4 flex flex-row justify-evenly items-center">
      <input type="text" className="w-2/3 px-4 py-1 border-[1px] border-slate-500 rounded-md" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button className="px-4 py-1 text-white bg-blue-500 rounded-md" onClick={onClick}>Add</button>
    </div>
  )
}

export default AddTodo