import TodoItem from "./todoItem"



{/* //selector tailwind classes para hijos [&>article]:p-4 */ }

const TodoList = ({ todos, deleteTodo, updateState }) => {
  return (
    <div className="bg-white dark:bg-black mt-8 rounded-md [&>article]:p-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}
          updateState={updateState} />
      ))}

    </div>
  )
}

export default TodoList