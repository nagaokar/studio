import react, { Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import Navigation from './Components/Navigation';


import LinkedInLogo from './Images/LinkedInLogo@2x.png'
import InstagramLogo from './Images/InstagramLogo@2x.png'
import SoundcloudLogo from './Images/SoundcloudLogo@2x.png'
import EmailLogo from './Images/EmailLogo@2x.png'
import GitHubLogo from './Images/GithubLogo@2x.png'


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
                If you like my work, please do<br></br>
                get in touch.<br></br>
              </h2>
                <div className="contact-icons">

                  {/* LinkedIn ==================================*/}
                <a href="https://www.linkedin.com/in/reiji-n-5767b312a/" 
                  target="_blank" rel="noopener noreferrer">
                    <img 
                      classname="social-icon" src={LinkedInLogo}>
                    </img>
                </a>

                  {/* Email ================================== */}
                <a href="mailto:nagaoka.ra@gmail.com" 
                  target="_blank" rel="noopener noreferrer">
                    <img classname="social-icon" src={EmailLogo}>
                    </img>
                </a>

              </div>
            </div>

            {/* =================================== Hobbies  ================================= */}
            <div className="hobbies-links">
            <p>Here's what I get up to in my spare time:</p>

              {/* Github: Nagaokar ================================== */}
              <a href="https://github.com/nagaokar" 
              target="_blank" rel="noopener noreferrer">
                <img 
                  className="social-icon" src={GitHubLogo}>
                </img>
              </a>

              {/* Instagram: MASSLAND ================================== */}
              <a href="https://www.instagram.com/massland/?hl=en" 
              target="_blank" rel="noopener noreferrer">
                <img 
                  className="social-icon" src={InstagramLogo}>
                </img>
              </a>

              {/* SoundCloud: MASSLAND ================================== */}
              <a href="https://soundcloud.com/massland" 
                target="_blank" rel="noopener noreferrer">
                  <img 
                    className="social-icon" src={SoundcloudLogo}>
                  </img>
              </a>




            </div>
          </div>
    </Fragment>
)

const Projects = () => (
  <Fragment>
        <Navigation/>
        <div className="content-container-projects">
        {/* =================================== ProjectPageNavigation  ================================= */}
        <div className="sidebar">
            <div className="projects-text"><h1>Projects</h1></div>
            <div className="projects-nav">
              <p>Project1Name</p>
              <p>Project #</p>
            </div>
          </div>
          
          <div className="projects-list">
            {/* =================================== Project1Name  ================================= */}
            <div className="project-card">
              <img className="project-image" src="https://via.placeholder.com/300"></img>
              {/* <div className="project-title">Project1Name</div> */}
            </div>
            {/* =================================== Project2Name  ================================= */}
            <div className="project-card">
              <img className="project-image" src="https://via.placeholder.com/300"></img>
              {/* <div className="project-title">Project2Name</div> */}
            </div>


          </div>
        </div>
    </Fragment>
)