import react from 'react'
import Navigation from '../Components/Navigation'
import PlaceholderText from '../Components/PlaceholderText'
import './ProjectPage.css'

import coverImage from '../Media/Cityzen3Cover.png'
import { Component } from 'react'

class projectTemplate extends Component {
    constructor() {
        super();
        this.state = {
            coverImage, //just replace the IMG source in import
            projectTitle: "Cityzen III", //replace with contextual info for your project
            secondLine: "A participatory planning game & website for developing zero-carbon future cities",
            date: "2020-21",
            organisation: "CPU.Ai || Manchester School of Architecture",
            portfolioURL: "https://issuu.com/nagaokastudio/docs/studio_three_25_05_21"
        }
    }

    render() {

        const { coverImage, projectTitle, secondLine, organisation, date, portfolioURL} = this.state;
        return(
            <div>
                <img className="cover-image" src={coverImage}></img>
                <div className="cover-image-text">
                    <h1 className="project-title">{projectTitle}</h1>
                    <p>{secondLine}</p>
                    <p>{organisation}</p>
                    <time>{date}</time>
                </div>
                <div className="grid-container">
    {/* ============================= BASIC INFORMATION =============================  */}
                    <div className="section-heading">
                        <h3>Information</h3></div>

                    <div className="info-grid">
                        <div className="info-text">
                            <p>Date Started:</p>
                            <h3>January 2021</h3>
                        </div>
                        <div className="info-text">
                            <p>Date completed:</p>
                            <h3>May 2021</h3>
                        </div>
                        <div className="info-text">
                            <p>Atelier:</p>
                            <h3>CPU.Ai</h3>
                        </div>
                        <div className="info-text">
                            <p>Game built with:</p>
                            <h3>Unity, Blender</h3>
                        </div>
                        <div className="info-text">
                            <p>Website developed with:</p>
                            <h3>HTML5, CSS3, ES6, React</h3>
                        </div>
                        <div className="info-text">
                            <p>Course:</p>
                            <h3>MA Architecture</h3>
                        </div>
                    </div>
    {/* ============================= ABOUT =============================  */}
                    <div className="section-heading"><h3>About</h3></div>
                    <div className="section-text">
                        <p>Cityzen III is the final showcase and culmination of the previous two chapters (Cityzen I and II).
                            This portfolio contains the final design of the game, explaining the mechanics and rules of play
                            through using a game tutorial.
                            </p><p>
                            Further, it shows how the game sits within a web-based participatory ecosystem. Both the Front-end 
                            and backend applications are demonstrated shown with the game gallery, analytics, and feedback portals.
                            </p><p>
                            To read the document, please click 'view portfolio' below (you will be redirected to Issuu in a new tab)
                        </p></div>
    {/* ============================= Portfolio =============================  */}
                    <div className="section-heading"><h3>Portfolio</h3></div>
                        <a className=" section-text portfolio-link"
                           href="https://issuu.com/nagaokastudio/docs/studio_three_25_05_21"
                           target="_blank"
                           >
                           View Portfolio on Issuu</a>
    {/* ============================= End of project details =============================  */}
                </div>
            </div>
        );
    }
}

export default projectTemplate; 

{/* <div>
<div className="cover-img-container">
    <Navigation/>
    <img className="cover-image" src="https://via.placeholder.com/1920"></img>
    <div className="cover-image-text">
        <h1 className="project-title">Project Title</h1>
        <h3>CPU.Ai Lab at the Manchester School of Architecture</h3>
        <time>2020-21</time>
    </div>
</div>
<div className="project-details">
    <div className="description">
        <PlaceholderText/>
    </div>
</div>
</div> */}