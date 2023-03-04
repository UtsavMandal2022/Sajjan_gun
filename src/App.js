import Home from './Home';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './contact';
import Blogdetails from './blogdetails';
import Addblog from './addblog';
import Notfound from './notfound';

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
        <Route path="/addblog">
          <Addblog/>
        </Route>
        <Route path="/blogs/:id">
          <Blogdetails/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
