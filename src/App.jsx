import { useState, useEffect } from 'react'
import { DragDropContext } from '@hello-pangea/dnd'
import Header from './components/header'
import TodoComputed from './components/todoComputed'
import TodoCreate from './components/todoCreate'
import TodoFilter from './components/todoFilter'
import TodoList from './components/todoList'



const initialStateTodo = JSON.parse(localStorage.getItem('todos'))
  || []


const reorder = (list, startIndex, endIndex) => {
  const result = [...list]
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}


const App = () => {

  const [todos, setTodos] = useState(initialStateTodo)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo])
  }


  const updateState = (id) => {
    const newArray = todos.map(todo => todo.id === id ?
      { ...todo, completed: !todo.completed }
      : todo)
    setTodos(newArray)
  }


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;


  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }


  const [filter, setFilter] = useState('all')

  const changeFilter = (filter) => {
    setFilter(filter)
  }


  const filterTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed)
    }
  }

  const handleDragEnd = result => {
    const { destination, source } = result
    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return

    setTodos((prevTask) =>
      reorder(prevTask, source.index, destination.index)
    )
  }

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000
    bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-950 min-h-screen
    md:bg-[url('./assets/images/bg-desktop-light.jpg')]
    md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')] ">
      <Header />

      <main className="container mx-auto px-4 mt-8 md:max-w-2xl">
        <TodoCreate createTodo={createTodo} />

        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={filterTodos()}
            deleteTodo={deleteTodo}
            updateState={updateState} />

        </DragDropContext>
        <TodoComputed computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8">
        App tasks drag & drop
      </footer>
    </div>
  )
}
export default App