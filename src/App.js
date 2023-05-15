
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import Home from './components/Home'
import Experience from './components/Experience'





function App() {
  return (

    <Router>
      {/* <Switch>
        <Route exact path="/" component={Home} />
      </Switch> */}
      <Experience />

    </Router>
  );
}

export default App;
