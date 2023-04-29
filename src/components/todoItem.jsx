import IconCross from './icons/iconCross'
import IconCheck from './icons/iconCheck'



const TodoItem = ({ todo, deleteTodo, updateState }) => {

  const { id, title, completed } = todo


  return (
    <article className='flex gap-4 border-b-gray-400 border-b'>

      <button onClick={() => updateState(id)}
        className={`w-5 h-5 rounded-full border-2 border-gray-400
        ${completed
            ? "flex justify-center items-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500"
            : "inline-block"
          }`}
      >{
          completed &&
          <IconCheck />
        }
      </button>
      <p className={`text-gray-600 grow ${completed &&
        'line-through'
        }`}>
        {title}
      </p>
      <button onClick={() => deleteTodo(id)}>
        <IconCross />
      </button>
    </article>
  )
}
export default TodoItem