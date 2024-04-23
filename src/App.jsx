import { useState } from 'react'

import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'

function App() {


  return (
    <>
      <div className='relative'>
        <NavBar />
        <FullScreenVideo />

      </div>

    </>
  )
}

export default App
