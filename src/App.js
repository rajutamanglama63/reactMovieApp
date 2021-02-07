import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MoviesState from './context/moviesState'

function App() {
  return (
      <div>
        <MoviesState>
        <Router>
        <Navbar />
        <Switch>
          <div className="container">
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
          </div>
        </Switch>
      </Router>
        </MoviesState>
      </div>
  );
}

export default App;
