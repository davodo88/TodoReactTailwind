import { useState } from "react"

const TodoCreate = ({ createTodo }) => {


  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle('')
    }
    createTodo(title);
    setTitle('');

  }



  return (
    <form onSubmit={handleSubmit}
      className="flex gap-4 items-center bg-white dark:bg-gray-800 rounded-md 
          overflow-hidden py-4 px-4">
      <span className="rounded-full border-2 border-gray-400 w-5 h-5 
            inline-block">
      </span>
      <input
        type="text"
        placeholder="Crear tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-gray-400 dark:bg-gray-800 outline-none" />
    </form>
  )
}

export default TodoCreate