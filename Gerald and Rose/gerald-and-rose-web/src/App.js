
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Navbar from './components/pages/Navbar';
import Footer from './components/footer/footer';
import web from './components/pages/webDesign/webDesign';
import bussinessService from './components/pages/businessService/businessService';
import aboutus from './components/pages/aboutUs/aboutUs'
import BlogPost from './components/pages/post/post'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/web-design' exact component={web}/>
        <Route path='/businessService' exact component={bussinessService}/>
        <Route path='/aboutUs' exact component={aboutus}/>
        <Route path='/post' exact component={BlogPost}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
