import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'
import NoticiaCompleta from './components/NoticiaCompleta'

function App() {
  return (
    <Router>
      <div className='relative'>
        <NavBar />
        <FullScreenVideo />
        <Routes>
          <Route path="/" element={<Noticias />} /> {/* Pantalla principal con lista de noticias */}
          <Route path="/noticias/:id" element={<NoticiaCompleta />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;