const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
  return (
    <section className='flex justify-around p-4 bg-white 
    transition-all duration-1000 dark:bg-gray-800 rounded-md'>
      <span className={`text-gray-400 ${computedItemsLeft === 0 && 'hidden'}`}>{`${computedItemsLeft} task left`}</span>
      <button onClick={clearComplete}
        className='text-gray-400'>Clear complete</button>
    </section>
  )
}

export default TodoComputed


