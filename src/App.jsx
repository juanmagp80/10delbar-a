import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Noticias} /> {/* Pantalla principal con lista de noticias */}
          <Route path="/noticias/:id" component={NoticiaCompleta} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;