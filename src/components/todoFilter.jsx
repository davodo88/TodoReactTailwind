const TodoFilter = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto px-4 mt-8 rounded-b-md">
      <div className='flex justify-center rounded-md bg-white p-4 gap-4'>
        <button onClick={() => changeFilter('all')}
          className={`${filter === 'all' ?
            'hover:text-gray-500 text-blue-500' :
            'hover:text-blue-500 text-gray-500'
            }`}>
          All
        </button>
        <button onClick={() => changeFilter('active')}
          className={`${filter === 'active' ?
            'hover:text-gray-500 text-blue-500' :
            'hover:text-blue-500 text-gray-500'
            }`}>
          Active
        </button>
        <button onClick={() => changeFilter('completed')}
          className={`${filter === 'completed' ?
            'hover:text-gray-500 text-blue-500' :
            'hover:text-blue-500 text-gray-500'
            }`}>
          Complete
        </button>
      </div>
    </section>
  )
}

export default TodoFilter