import { useEffect, useRef, useState } from 'react'
import IconMoon from './icons/iconMoon'
import IconSun from './icons/iconSun'

const Header = () => {

  const initialStateDarkMode = localStorage.getItem('theme') === 'dark'


  const [darkMode, setDarkMode] = useState(initialStateDarkMode)
  const reffHeader = useRef(null)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }

  }, [darkMode]);


  return (
    <header ref={reffHeader} className="container md:max-w-2xl pt-8 mx-auto px-4 ">
      <div className="flex justify-between ">
        <h1 className="uppercase font-semibold tracking-[0.3em] transition-all duration-1000
            text-left text-4xl text-gray-200 dark:text-white">
          todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode ? <IconSun /> : <IconMoon />
          }
        </button>
      </div>
    </header>
  )
}
export default Header