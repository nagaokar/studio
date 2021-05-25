import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import PlaceholderText from './Components/PlaceholderText';
import Header from './Components/Header';
import Footer from './Components/Footer'

import CityzenGameImg from '../src/CityzenGameImg.jpg'
import TokyoIzakaya from '../src/TokyoIzakaya_blurredPNG.png'
// import Navigation from './Components/Navigation'


export default function App() {
  return (

    <Router basename={public.env.PUBLIC_URL} style={{background:"none"}}>
        <main>
          {/* <nav classname="home-nav">
            <ul classname="nav-bar">
                <li><Link className="text-link" to="/">Home</Link></li>
                <li><Link className="text-link" to="/about">About</Link> </li>
                <li><Link className="text-link" to="/projects">Projects</Link> </li>
                <li><Link className="text-link" to="/contact">Contact</Link> </li>
            </ul>
          </nav> */}
          <Switch>          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <h1>404: Page not found</h1>} />
          </Switch>
        </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <div className="home-bg" style={{backgroundImage:`url(${TokyoIzakaya})`}}>
    <h1 className="intro-text">NAGAOKA STUDIO</h1>

    <nav classname="home-nav">
        <ul classname="nav-bar">
          <li><Link className="text-link" to="/">Home</Link></li>
          <li><Link className="text-link" to="/about">About</Link> </li>
          <li><Link className="text-link" to="/projects">Projects</Link> </li>
          <li><Link className="text-link" to="/contact">Contact</Link> </li>
        </ul>
    </nav>

      <div className="footer">
        <p>Cover Photo by <a href="https://unsplash.com/@agk42?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Alex Knight</a> on <a href="https://unsplash.com/s/photos/tokyo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash</a></p>
      </div>
    </div>
  </Fragment>
);




const About = () => (
  <Fragment>
    <h1>About</h1>
    <PlaceholderText/>
  </Fragment>

);

const Projects = () => (
  <Fragment>
    <h1>Projects</h1>
  </Fragment>

);

const Contact = () => (
  <Fragment>
   <h1>Contact</h1>
   </Fragment> 
  );