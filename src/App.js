import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom';
import './App.css';

import PlaceholderText from './Components/PlaceholderText';
import Footer from './Components/Footer'


import Navigation from './Components/Navigation';
import _404page from './Components/_404page';

import cityzenProtoypeImg from './Media/cityzenPrototype.png'

import TokyoIzakaya from './Media/TokyoIzakaya_blurredPNG.png'


export default function App() {
  return (
    <Router basename="/studio" style={{background:"none"}}>
        <main>
          <Switch>          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
{/* ====================================================== Projects Links ========================================= */}
              <Route path="/cityzen1" component={Cityzen1} />
              <Route path="/cityzen2" component={Cityzen2} />
              <Route path="/cityzen3" component={Cityzen3} />
{/* -=============================================== End of Projects Links ========================================= */}
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
    <div className="grid-container">
    {/*=============== Cityzen 1 ============================================================ */}
      <div className="project-card">
        <img className="project-img" src={cityzenProtoypeImg}/>
        <div className="overlay">
          <Link className="text-link-card" to="/cityzen1">Cityzen I</Link>
        </div>
      </div>
    {/*=============== Cityzen 2 ============================================================ */}
      <div className="project-card">
          <img className="project-img" src="https://via.placeholder.com/450"/>
          <div className="overlay">
            <Link className="text-link-card" to="/cityzen3">Cityzen II</Link>
          </div>
        </div>
    {/*=============== Cityzen 3 ============================================================ */}
    <div className="project-card">
          <img className="project-img" src="https://via.placeholder.com/450"/>
          <div className="overlay">
            <Link className="text-link-card" to="/cityzen3">Cityzen III</Link>
          </div>
        </div>
    </div>
  </Fragment>
);


const Cityzen1 = () => (
  <Fragment>
    <Navigation/>
    <iframe allowfullscreen allow="fullscreen" style="border:none;width:100%;height:326px;" 
    src="//e.issuu.com/embed.html?backgroundColor=%352d39"></iframe>
  </Fragment>
  );


const Cityzen2 = () => (
  <Fragment>
    <div>Cityzen2</div>
  </Fragment>
  );

const Cityzen3 = () => (
  <Fragment>
    <div>Cityzen3</div>
  </Fragment>
  );


const Contact = () => (
  <Fragment>
   <h1>Contact</h1>
   <Navigation/>
   </Fragment> 
  );