import { useState } from 'react'
import darkLogo from '../../assets/dark_mode_icon.svg'
import { MdLightMode , MdDarkMode } from "react-icons/md";
import lightLogo from '../../assets/light_mode_icon.svg'
import { useTheme } from '../../contexts/ThemeContext'
const Header = () => {
  const  {isDarkMode, toggleTheme} = useTheme();

  return (
    <div className='header'>
        <div>LinkBook</div> 
        <div
        className="dark-mode-icon" 
        alt="Toggle theme"
        onClick={toggleTheme} >{isDarkMode? <MdDarkMode size={30} color='#ffae00 '/>: <MdLightMode size={30} color='#ffffff'/>} </div>

    </div>
  )
}

export default Header