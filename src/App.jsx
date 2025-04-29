import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ContactList from './components/contacts/ContactList'
import ContactModal from './components/contacts/ContactModal'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App() {
 const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <Header />
     <ContactList/>
    <Footer />
    </>
  )
}

export default App