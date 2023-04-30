import { useEffect, useState } from 'react'
import IconMoon from './icons/iconMoon'
import IconSun from './icons/iconSun'

const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [darkMode]);



  return (
    <header className="container pt-8 mx-auto px-4">
      <div className="flex justify-between">
        <h1 className="uppercase font-semibold tracking-[0.3em] 
            text-left text-4xl text-white">
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