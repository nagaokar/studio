import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf'

import './App.css';

import PlaceholderText from './Components/PlaceholderText';
import Footer from './Components/Footer'
import Navigation from './Components/Navigation';
import _404page from './Components/_404page';
import ProjectTemplate from './Projects/ProjectTemplate'

import cityzenProtoypeImg from './Media/cityzenPrototype.png'
import TokyoIzakaya from './Media/TokyoIzakaya_blurredPNG.png'
import cityzen1Portfolio from './Media/cityzen1Portfolio.pdf'
import PDFviewer from './Components/PDFviewer';

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
          <p>MA Architecture // 2020-21</p>
        </div>
      </div>
    {/*=============== Cityzen 2 ============================================================ */}
      <div className="project-card">
          <img className="project-img" src="https://via.placeholder.com/450"/>
          <div className="overlay">
            <Link className="text-link-card" to="/cityzen3">Cityzen II</Link>
            <p>MA Architecture // 2020-21</p>
          </div>
        </div>
    {/*=============== Cityzen 3 ============================================================ */}
    <div className="project-card">
          <img className="project-img" src="https://via.placeholder.com/450"/>
          <div className="overlay">
            <Link className="text-link-card" to="/cityzen3">Cityzen III</Link>
            <p>MA Architecture // 2020-21</p>
          </div>
        </div>
    </div>
  </Fragment>
);

const Cityzen1 = () => (
  <Fragment>
    <ProjectTemplate/>
    {/* <PDFviewer/> NOTE: Works on LocalHost but not when deployed (gh-pages)*/}
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