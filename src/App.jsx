import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import FullScreenVideo from './components/FullScreenVideo'
import NavBar from './components/NavBar'
import Noticias from './components/Noticias'
import NoticiaCompleta from './components/NoticiaCompleta'
import NoticiaForm from './components/NoticiaForm';
import Modal from './components/Modal';
import { Auth0Provider } from '@auth0/auth0-react';
import auth from './firebase';
import { useEffect } from 'react';
import LoginForm from './components/LoginForm';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";





import { useState } from 'react';


function App() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [role, setRole] = useState(null);



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        user.getIdToken().then((idToken) => {
          fetch('https://basedatosbarca-8b9074e04ffa.herokuapp.com/role', {
            headers: {
              Authorization: idToken,
            },
          })
            .then(response => {
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              if (response.headers.get('Content-Type') !== 'application/json') {
                throw new Error('Received content is not JSON');
              }
              return response.json();
            })
            .then(json => {
              // handle your JSON response here
            })
            .catch(error => {
              console.error(error);
            });
        });
      }
    });
  }, []);
  const register = async (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        fetch('https://basedatosbarca-8b9074e04ffa.herokuapp.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uid: userCredential.user.uid, email: email }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const login = async (email, password) => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in 
      const user = userCredential.user;
      // ...
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error: ", errorCode, errorMessage);
    }
  };

  return (

    <div> {/* Wrap the JSX code inside a parent element */}

      <Router>
        <div className='relative'>
          <>
            <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
              <NoticiaForm closeModal={() => setModalOpen(false)} />
            </Modal>
            <NavBar register={register} login={login} user={user} role={role} setShowForm={setShowForm} />
            <LoginForm login={login} />
            <FullScreenVideo />

            <Routes>
              <Route path="/" element={<Noticias />} /> {/* Pantalla principal con lista de noticias */}
              <Route path="/noticias/:id" element={<NoticiaCompleta />} />

            </Routes>

          </>
        </div>
      </Router>
    </div>

  );
}

export default App;