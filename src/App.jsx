import { useState } from 'react'

import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'

function App() {


  return (
    <>
      <div className='relative'>
        <NavBar />
        <FullScreenVideo />
        <Noticias />


      </div>

    </>
  )
}

export default App
