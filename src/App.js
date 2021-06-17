import react, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams } from 'react-router-dom'
import Navigation from './Components/Navigation';
import ScrollToTop from './Components/ScrollToTop';
// import Cityzen3 from './Components/Cityzen3';

// Project Pages ========================================
import Cityzen from './Components/ProjectPages/Cityzen'
import Ps1 from './Components/ProjectPages/Ps1'
import Ps2 from './Components/ProjectPages/Ps2'

import './App.css'

// Social Media Icons ======================================
import LinkedInLogo from './Images/Icons/LinkedInLogo@2x.png'
import InstagramLogo from './Images/Icons/InstagramLogo@2x.png'
import SoundcloudLogo from './Images/Icons/SoundcloudLogo@2x.png'
import EmailLogo from './Images/Icons/EmailLogo@2x.png'
import GitHubLogo from './Images/Icons/GithubLogo@2x.png'
import CVLogo from './Images/Icons/CVLogo@2x.png'
import IssuuLogo from './Images/Icons/IssuuLogo@2x.png'

// Projects Cover Photos ======================================
import CityzenCover from './Images/CoverImages/CityzenCover.png'
import PS2Cover from './Images/CoverImages/PS2Cover.png'
import PS1Cover from './Images/CoverImages/PS1Cover.png'


export default function App() {

  return(

    <Router basename="/studio" style={{background:"none"}}>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
{/* ====================================================== Projects Links ========================================= */}
          <Route path="/cityzen" component={CityzenPage} />
          <Route path="/ps1" component={Ps1Page} />
          <Route path="/ps2" component={Ps2Page} />
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
          <h1 class=" greet-title cssanimation sequence fadeInBottom">Hi,</h1>
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
                If you like my work, please get in touch.<br></br>
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
              <a href="https://drive.google.com/file/d/1YwbL4T1tiOy8Rzlmf9-tzSt3qa_PbrQM/view?usp=sharing" 
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
          <div className="projects-title cssanimation sequence fadeInBottom">
            <h1>Projects</h1>
          </div>
          {/* <div className="title-bar" style={{display:"inline-flex"}}>
            <div>
            <h2 className="about-text" style={{marginTop:"-1rem"}}> 
                A participatory planning game<br></br>
                for the zero-carbon development of <br></br>
                the Northern Gateway, Manchester<br></br>
            </h2>
            </div>
          </div> */}
          <hr style={{marginBottom:"1em", marginTop:"2.5rem"}}></hr>
          <div className="projects-wrapper">
            <div className="projects-list"> 
              <a className="cover-img c-img1 cssanimation sequence fadeInBottom" href="/studio/cityzen"><img className="cover-img" src={CityzenCover}></img></a> 
              <a className="cover-img c-img2 cssanimation sequence fadeInBottom" href="/studio/ps2"><img className="cover-img" src={PS2Cover}></img></a>
              <a className="cover-img c-img3 cssanimation sequence fadeInBottom" href="/studio/ps1"><img className="cover-img" src={PS1Cover}></img></a>
            </div>
          </div>
      </div>
    </Fragment>
)

// ================================================================= Cityzen 3 ========================================
const CityzenPage = () => (
  <Fragment>
    <Navigation/>
    <Cityzen/>
    <ScrollToTop/>
  </Fragment>
)


const Ps1Page = () => (
  <Fragment>
    <Navigation/>
    <Ps1/>
    <ScrollToTop/>
  </Fragment>
)

const Ps2Page = () => (
  <Fragment>
    <Navigation/>
    <Ps2/>
    <ScrollToTop/>
  </Fragment>
)

{/* =================================== ProjectPageNavigation  ================================= */}
{/* <div className="sidebar"
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