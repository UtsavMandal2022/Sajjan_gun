import Home from './Home';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './contact';

function App() {

  return (
    <Router>
      <div className="Startshow">
        <Navbar />
        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
