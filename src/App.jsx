import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navigator from './Navigator'
import FloatingHeader from './FloatingHeader'

import Navbar from './Navbar'

function App() {
  

  return (
    <div>
      <FloatingHeader />
      <Navigator />
      
      {/*<Navbar />*/}
      
    </div>
  )
}

export default App
