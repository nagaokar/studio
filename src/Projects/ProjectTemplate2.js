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
            projectTitle: "Project Template", //replace with contextual info for your project
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
                <Navigation/>
                <img className="cover-image" src={coverImage}></img>
                <div className="cover-image-text">
                    <h1 className="project-title">{projectTitle}</h1>
                    <p>{secondLine}</p>
                    <p>{organisation}</p>
                    <time>{date}</time>
                </div>
    {/* ============================= Start of CSS GRID =============================  */}
                <div class="grid-container">
                    <div class="grid-top-center">
                        <p>some text</p>
                    </div>
                    <div class="grid-center-center">
                        <p>some text</p>
                    </div>
                    <div class="grid-bottom-center">
                        <p>some text</p>
                    </div>
                    <div class="grid-left-col"></div>
                    <div class="grid-right-col"></div>
                </div>
{/* ============================= BASIC INFORMATION =============================  */}

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