import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'
import NoticiaCompleta from './components/NoticiaCompleta'
import NoticiaForm from './components/NoticiaForm';
import Modal from './components/Modal';
import { Auth0Provider } from '@auth0/auth0-react';




import { useState } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);



  return (
    <Auth0Provider
      domain="dev-owz5lsfhlmixdmp7.us.auth0.com"
      clientId="NL7HgbjGrwfMlBEmx1IMyBxrGDuJuyk8"
      redirectUri={window.location.origin}
    >
      <div> {/* Wrap the JSX code inside a parent element */}

        <Router>
          <div className='relative'>
            <>
              <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
                <NoticiaForm closeModal={() => setModalOpen(false)} />
              </Modal>
              <NavBar setShowForm={setShowForm} />

              <FullScreenVideo />
              <Routes>
                <Route path="/" element={<Noticias />} /> {/* Pantalla principal con lista de noticias */}
                <Route path="/noticias/:id" element={<NoticiaCompleta />} />

              </Routes>

            </>
          </div>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;