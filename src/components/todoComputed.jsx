const TodoComputed = ({ computedItemsLeft, clearComplete }) => {
  return (
    <section className="flex justify-around p-4 bg-white rounded-md">
      <span className='text-gray-400'>{`${computedItemsLeft} todos left`}</span>
      <button onClick={clearComplete}
        className='text-gray-400'>Clear complete</button>
    </section>
  )
}

export default TodoComputed