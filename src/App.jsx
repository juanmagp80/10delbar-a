import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'
import NoticiaCompleta from './components/NoticiaCompleta'
import Home from './views/Home'
import Login from './views/Login'
import { useState } from 'react';

function App() {
  const [user, etUser] = useState(null);
  return (
    <div> {/* Wrap the JSX code inside a parent element */}
      {user ? <Home user={user} /> : <Login />}
      <Router>
        <div className='relative'>
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