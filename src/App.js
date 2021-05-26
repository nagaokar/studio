import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import PlaceholderText from './Components/PlaceholderText';
import Header from './Components/Header';
import Footer from './Components/Footer'

import CityzenGameImg from '../src/CityzenGameImg.jpg'
import TokyoIzakaya from '../src/TokyoIzakaya_blurredPNG.png'
import Navigation from './Components/Navigation';
// import ProjectCards from './Components/ProjectCards';
import _404page from './Components/_404page';
import ProjectsGrid from './Components/ProjectsGrid';


export default function App() {
  return (
    <Router basename="/studio" style={{background:"none"}}>
        <main>
          <Switch>          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route render={_404page} />
          </Switch>
        </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <div className="home-bg" style={{backgroundImage:`url(${TokyoIzakaya})`}}>
    <h1 className="intro-text">NAGAOKA STUDIO</h1>
    <Navigation/>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  </Fragment>
);




const About = () => (
  <Fragment>
    <h1>About</h1>
    <Navigation/>
    <PlaceholderText/>
  </Fragment>

);

const Projects = () => (
  <Fragment>
    <h1>Projects</h1>
    <Navigation/>
    <ProjectsGrid/>
  </Fragment>

);

const Contact = () => (
  <Fragment>
   <h1>Contact</h1>
   <Navigation/>
   </Fragment> 
  );