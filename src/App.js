import react, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import Navigation from './Components/Navigation';
import Cityzen3 from './Components/Cityzen3';
import ProjectPage from './Components/ProjectPage'

import './App.css'


import LinkedInLogo from './Images/LinkedInLogo@2x.png'
import InstagramLogo from './Images/InstagramLogo@2x.png'
import SoundcloudLogo from './Images/SoundcloudLogo@2x.png'
import EmailLogo from './Images/EmailLogo@2x.png'
import GitHubLogo from './Images/GithubLogo@2x.png'
import CVLogo from './Images/CVLogo@2x.png'
import IssuuLogo from './Images/IssuuLogo@2x.png'


import TitlePg from './Images/Cityzen3/C3_pg1.png'
import DevPg from './Images/Cityzen3/C3_devRole.png'
import EnvPg from './Images/Cityzen3/C3_envRole.png'
import EntPg from './Images/Cityzen3/C3_entRole.png'
import gImg1 from './Images/Cityzen3/C3_game1.png'
import gImg2 from './Images/Cityzen3/C3_game2.png'
import gImg3 from './Images/Cityzen3/C3_game3.png'
import gGallery from './Images/Cityzen3/C3_gallery.png'
import gGraphs from './Images/Cityzen3/C3_graphs.png'


export default function App() {

  return(

    <Router basename="/studio" style={{background:"none"}}>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
{/* ====================================================== Projects Links ========================================= */}
          <Route path="/Cityzen3" component={Cityzen3} />
          {/* <Route path="/#2" component={Project2} />
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
          <h1 class=" greet-title cssanimation sequence fadeInBottom">Welcome</h1>
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
              <h1 className="about-title cssanimation sequence fadeInBottom">About</h1>
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
                    <img className="social-icon" src={LinkedInLogo}>
                    </img>
                </a>

                  {/* Email ==================================*/}
                <a href="mailto:nagaoka.ra@gmail.com" 
                  target="_blank" rel="noopener noreferrer">
                    <img className="social-icon" src={EmailLogo}>
                    </img>
                </a>

              </div>
            </div>

            {/* =================================== Hobbies  ================================= */}
            <div className="hobbies-links">
            <div className="p-subtitle">
              <p>Here's what I get up to in my spare time:</p>
            </div>

              {/* Github: Nagaokar ================================== */}
              <a href="https://github.com/nagaokar" 
              target="_blank" rel="noopener noreferrer">
                <img className="social-icon" src={GitHubLogo}>
                </img>
              </a>

              {/* Instagram: MASSLAND ================================== */}
              <a href="https://www.instagram.com/massland/?hl=en" 
              target="_blank" rel="noopener noreferrer">
                <img className="social-icon" src={InstagramLogo}>
                </img>
              </a>

              {/* SoundCloud: MASSLAND ================================== */}
              <a href="https://soundcloud.com/massland" 
                target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={SoundcloudLogo}>
                  </img>
              </a>
            {/* =================================== Resume  ================================= */}
            <div className="cv-link">
            <div className="p-subtitle">
              <p>Take a look at my resume:</p>
              </div>
              <a href="#" 
                target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={CVLogo}>
                  </img>
              </a>
            </div>

            </div>
          </div>
    </Fragment>
)

const Projects = () => (
  <Fragment>
        <Navigation/>
        <div className="content-container-projects">
        <div>
          <div className="projects-title cssanimation sequence fadeInBottom">
            <h1>Projects</h1>
          </div>

        <h2 className="about-text"> 
            A participatory planning game<br></br>
            for the zero-carbon development of <br></br>
            the Northern Gateway, Manchester<br></br>
            </h2>
          </div>
          <hr style={{marginBottom:"5rem", marginTop:"2.5rem"}}></hr>
          <div className="projects-list">
            <img className="proj-img" src="https://via.placeholder.com/400"></img>
            <img className="proj-img" src="https://via.placeholder.com/400"></img>
            <img className="proj-img" src="https://via.placeholder.com/400"></img>
            <img className="proj-img" src="https://via.placeholder.com/400"></img>
            


          </div>
        </div>
    </Fragment>
)


// const Projects = () => (
//   <Fragment>
//         <Navigation/>
//         <div className="content-container-projects">
//         <div className="projects-title cssanimation sequence fadeInBottom"><h1>Projects</h1>
//         </div>
//         <div className="projects-nav">
//       <p>Project1Name</p>
//       <p>Project #</p>
//     </div>

//         </div>
//     </Fragment>
// )

// ================================================================= Cityzen 3 ========================================

const Project1 = () => (
  <Fragment>
    <Cityzen3/>
  </Fragment>
)

{/* =================================== ProjectPageNavigation  ================================= */}
{/* <div className="sidebar">
    <div className="projects-title cssanimation sequence fadeInBottom"><h1>Projects</h1></div>
    <div className="projects-nav">
      <p>Project1Name</p>
      <p>Project #</p>
    </div>
  </div>
  
  <div className="projects-list">
    {/* =================================== Project1Name  ================================= */}
//     <div className="project-card">
//       <a href="/Cityzen3"><img className="project-image" src="https://via.placeholder.com/900x450"></img></a>
//     </div>
//   </div>
// </div> */}