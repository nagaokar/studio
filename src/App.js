import react, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import Navigation from './Components/Navigation';


export default function App() {

  return(

    <Router basename="/studio" style={{background:"none"}}>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
{/* ====================================================== Projects Links ========================================= */}
          {/* <Route path="/#1" component={Project1} />
          <Route path="/#2" component={Project2} />
          <Route path="/#2" component={Project3} /> */}
{/* -=============================================== End of Projects Links ========================================= */}
          {/* <Route render={_404page} /> */}
        </Switch>
      </main>
    </Router>
  );

}

const Home = () => (
  <Fragment>
    <Navigation/>
        <div className="content-container">
        <div>
          <h1 class=" greet-text cssanimation sequence fadeInBottom">Welcome</h1>
          <h3 className="intro-text cssanimation sequence fadeInBottom">
            I'm Reiji Nagaoka,<br></br>
            an MA Architecture graduate <br></br>
            specialising in computational design.
          </h3>
        </div>
        <div className="home-logo">
          {/* //TODO ADD PICTORIAL LOGO HERE */}
        </div>
      </div>
  </Fragment>
)

const About = () => (
  <Fragment>
          <Navigation/>
          <div className="content-container">
            <div className="about-text-container">
            <h1 className="about-title">About</h1>
            <h2 className="about-text"> 
              I'm a Graduate of the CPU.ai Lab within<br></br>
              the Manchester School of Architecture.<br></br>
            </h2>
            <h2 className="about-text"> 
              I am currently based in Manchester, UK.<br></br>
              If you would like my work, please do<br></br>
              get in touch.<br></br>
            </h2>
            </div>
            {/* =================================== Links  ================================= */}
            {/* <div className="about-links">
            <p>Here's what I get up to in my spare time:</p>
              <ul className="about-list">
                <li className="about-link-item"><a classname="about-link-item" href="#">Music production</a></li>
                <li className="about-link-item"><a href="#">Painting</a></li>
                <li className="about-link-item"><a href="#">Playlisting</a></li>
              </ul>
            </div> */}
            </div>
    </Fragment>
)

const Projects = () => (
  <Fragment>
        <Navigation/>
        <div className="content-container-projects">
          <div className="projects-list">
            
            {/* =================================== Project1Name  ================================= */}
            <div className="project-card">
              <img className="project-image" src="https://via.placeholder.com/300"></img>
              {/* <div className="project-title">Project1Name</div> */}
            </div>




          </div>
          
          
          <div className="sidebar">
            <p>Navigation:</p>
            <p>Project1Name</p>
            <p>Project #</p>
          </div>
          


        </div>
    </Fragment>
)