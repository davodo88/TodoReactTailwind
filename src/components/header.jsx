import IconMoon from './icons/iconMoon'

const Header = () => {
  return (
    <header className="container pt-8 mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="uppercase font-semibold tracking-[0.3em] 
            text-left text-4xl text-white">
          todo
        </h1>
        <button>
          <IconMoon className="fill-white" />
        </button>
      </div>
    </header>
  )
}
export default Header