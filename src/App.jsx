import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'
import NoticiaCompleta from './components/NoticiaCompleta'
import NoticiaForm from './components/NoticiaForm';

import { useState } from 'react';


function App() {
  const [user, setUser] = useState(null);



  return (
    <div> {/* Wrap the JSX code inside a parent element */}

      <Router>
        <div className='relative'>
          <NoticiaForm />

          <NavBar />
          <FullScreenVideo />
          <Routes>
            <Route path="/" element={<Noticias />} /> {/* Pantalla principal con lista de noticias */}
            <Route path="/noticias/:id" element={<NoticiaCompleta />} />

          </Routes>

        </div>
      </Router>
    </div>
  );
}

export default App;