
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/footer/footer';
import web from './components/pages/webDesign/webDesign';
import BS from './components/pages/businessService/businessService';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/web-design' exact component={web}/>
        <Route path='/businessService' exact component={BS}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
