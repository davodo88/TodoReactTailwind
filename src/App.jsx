import CrossIcon from './components/icons/crossIcon'
import MoonIcon from './components/icons/moonIcon'

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
    bg-no-repeat bg-contain bg-gray-500 min-h-screen">
      <header className="container pt-8 mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="uppercase font-semibold tracking-[0.3em] 
            text-left text-4xl text-white">
            todo
          </h1>
          <button>
            <MoonIcon className="fill-red-400" />
          </button>
        </div>
        <form className="flex gap-4 items-center bg-white rounded-md 
        overflow-hidden py-4 px-4 mt-8">
          <span className="rounded-full border-2 border-black w-5 h-5 
          inline-block">
          </span>
          <input type="text" placeholder="Crear tarea..."
            className="w-full text-gray-400 outline-none" />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        {/* //selector tailwind classes para hijos [&>article]:p-4 */}
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className='flex gap-4 border-b-gray-400 border-b' >
            <button className="rounded-full border-2 border-black w-5 h-5 
          inline-block">
            </button>
            <p className="text-gray-600 grow">
              Complete online JS curse
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className='flex gap-4 border-b-gray-400 border-b'>
            <button className="rounded-full border-2 border-black w-5 h-5 
          inline-block">
            </button>
            <p className="text-gray-600 grow">
              Complete online JS curse
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className='flex gap-4 border-b-gray-400 border-b'>
            <button className="rounded-full border-2 border-black w-5 h-5 
          inline-block">
            </button>
            <p className="text-gray-600 grow">
              Complete online JS curse
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>

        <section className="flex justify-around p-4 ">
          <span className='text-gray-400'>5 items left</span>
          <button className='text-gray-400'>Clear complete</button>
        </section>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className='flex justify-center rounded-mdbg-white p-4 gap-4'>
          <button className='hover:text-blue-600'>
            All
          </button>
          <button className='hover:text-blue-600'>
            Active
          </button>
          <button className='hover:text-blue-600'>
            Complete
          </button>
        </div>
      </section>

      <p className="text-center mt-8">
        drag & drop
      </p>
    </div>
  )
}
export default App