import TodoItem from "./todoItem"
import { Draggable, Droppable } from '@hello-pangea/dnd'


{/* //selector tailwind classes para hijos [&>article]:p-4 */ }

const TodoList = ({ todos, deleteTodo, updateState }) => {
  return (
    <Droppable droppableId="todos">
      {
        (dropableProvided) => (
          <div ref={dropableProvided.innerRef}
            {...dropableProvided.droppableProps}

            className="transition-all overflow-hidden duration-1000 bg-white dark:bg-black mt-8 rounded-md [&>article]:p-4">
            {todos.map((todo, index) => (

              <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>

                {
                  (dragableProvided) => (
                    <TodoItem
                      todo={todo}
                      deleteTodo={deleteTodo}
                      updateState={updateState}
                      ref={dragableProvided.innerRef}
                      {...dragableProvided.draggableProps}
                      {...dragableProvided.dragHandleProps}
                    />
                  )
                }

              </Draggable>

            ))}
            {dropableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}

export default TodoList