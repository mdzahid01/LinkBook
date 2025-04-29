import { useState } from 'react'
import darkLogo from '../../assets/dark_mode_icon.svg'
import lightLogo from '../../assets/light_mode_icon.svg'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => { 
        alert('This feature is not implemented yet')
        setDarkMode(!darkMode)
    }
  return (
    <div className='header'>
        <div>LinkBook</div> 

        <img src={darkMode ? lightLogo : darkLogo} 
        className="dark-mode-icon" 
        alt="Toggle theme"
        onClick={toggleTheme} />

    </div>
  )
}

export default Header