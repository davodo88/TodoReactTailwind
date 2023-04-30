import { useState } from 'react'
import Header from './components/header'
import TodoComputed from './components/todoComputed'
import TodoCreate from './components/todoCreate'
import TodoFilter from './components/todoFilter'
import TodoList from './components/todoList'


const initialStateTodo = [
  {
    id: 1,
    title: 'Go to the Work',
    completed: true
  },
  {
    id: 2,
    title: 'Estudy',
    completed: false
  },
  {
    id: 3,
    title: 'Go to the gym',
    completed: false
  },
  {
    id: 4,
    title: 'Complete todo App',
    completed: false
  }
]


const App = () => {

  const [todos, setTodos] = useState(initialStateTodo)



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

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
    bg-no-repeat bg-contain bg-gray-300 dark:bg-gray-950 min-h-screen">
      <Header />

      <main className="container mx-auto px-4 mt-8">
        <TodoCreate createTodo={createTodo} />

        <TodoList
          todos={filterTodos()}
          deleteTodo={deleteTodo}
          updateState={updateState} />

        <TodoComputed computedItemsLeft={computedItemsLeft}
          clearComplete={clearComplete}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
      </main>

      <footer className="text-center mt-8">
        drag & drop footer
      </footer>
    </div>
  )
}
export default App