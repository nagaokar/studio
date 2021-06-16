import React from 'react'
import Navigation from './Navigation'
import Carousel from './Carousel'

import '../App.css'

// Social Media Icons ======================================
import LinkedInLogo from './Images/Icons/LinkedInLogo@2x.png'
import InstagramLogo from './Images/Icons/InstagramLogo@2x.png'
import SoundcloudLogo from './Images/Icons/SoundcloudLogo@2x.png'
import EmailLogo from './Images/Icons/EmailLogo@2x.png'
import GitHubLogo from './Images/Icons/GithubLogo@2x.png'
import CVLogo from './Images/Icons/CVLogo@2x.png'
import IssuuLogo from './Images/Icons/IssuuLogo@2x.png'

import TitlePg from './Images/Cityzen3/C3_pg1.png'
import DevPg from './Images/Cityzen3/C3_devRole.png'
import EnvPg from './Images/Cityzen3/C3_envRole.png'
import EntPg from './Images/Cityzen3/C3_entRole.png'
import gImg1 from './Images/Cityzen3/C3_game1.png'
import gImg2 from './Images/Cityzen3/C3_game2.png'
import gImg3 from './Images/Cityzen3/C3_game3.png'
import gGallery from './Images/Cityzen3/C3_gallery.png'
import gGraphs from './Images/Cityzen3/C3_graphs.png'



const Cityzen3 = () => {
    return(
    <>
    <Navigation/>
        <div className="content-container-projects">
          <div className="project-desc-container">      
            <h1 className="about-title cssanimation sequence fadeInBottom">Cityzen</h1>
            <h2 className="about-text"> 
                    A participatory planning game<br></br>
                    for the zero-carbon development of <br></br>
                    the Northern Gateway, Manchester<br></br>
                  </h2>
            <div className="external-links">
            <div className="proj-long-desc">

              <div className="game-desc">
                <h3>Cityzen Game</h3>
                <hr></hr>
                <p>
                  Cityzen is a participatory planning game and purpose-built website which
                  enables an engaging and informative community planning process.</p>
                  <p>
                  It is an online multiplayer city-builder game where three players try to achieve
                  the most environmentally sustainable and socially equitable masterplan.
                  </p>
                  <p>
                  Players must simultaneously cooperate and compete with another to acheive group and
                  individual goals. The masterplans are scored using Doughnut Economics.
                </p>
              </div>
              <div className="game-desc">
                <h3>Cityzen Hub</h3>
                <hr></hr>
                <p>
                  The Cityzen Hub acts as an interactive data platform which records and stores all previous
                  games in a database.</p>
                  <p>
                  
                  </p>
                  <p>
                  Players must simultaneously cooperate and compete with another to acheive group and
                  individual goals. The masterplans are scored using Doughnut Economics.
                </p>
              </div>

            <hr></hr>
            <p><b>To view the full portfolio on Issuu, </b>
              <a href="https://issuu.com/nagaokastudio/docs/studio_three_25_05_21"
                 target="_blank" rel="noopener noreferrer"
              > click here</a>
            </p>
            {/* <p>
              For more information on the Northern Gateway, please  
              <a href="https://northerngatewaymanchester.co.uk/"
              target="_blank" rel="noopener noreferrer"
              > click here.</a>
            </p> */}
            <hr></hr>
            </div>
              <div className="back-button" style={{marginTop:"1rem"}}>
                <a href="/projects">Back to projects</a>  
              </div>
            </div>
          </div>
          <div className="photo-container">
          <img className="proj-img" src="#"></img>
          <img className="proj-img" src="#"></img>
          </div>
        </div>
    </>
    )
}

export default Cityzen3;