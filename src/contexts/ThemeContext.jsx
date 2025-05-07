import { useState, createContext, useEffect ,useContext } from 'react'

const ThemeContext  = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize state based on localStorage or system preference
     // Check if the user has a saved theme in localStorage
     // If not, check the system preference for dark mode
     // Default to light mode if neither is set
     // This will ensure that the theme is consistent across page reloads
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') return true;
        if (savedTheme === 'light') return false;
        // Check system preference if no saved theme
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
    , [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);