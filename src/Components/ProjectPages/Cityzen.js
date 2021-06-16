import react from 'react'
import { Component } from 'react'
import '../../App.css';

import IssuuLogo from '../../Images/Icons/IssuuLogo@2x.png'

// Project Info ======================================
import CityzenCover from '../../Images/CoverImages/CityzenCover.png'
import img1 from '../../Images/Cityzen3/C3_pg1.png'
import img2 from '../../Images/Cityzen3/C3_devRole.png'
import img3 from '../../Images/Cityzen3/C3_envRole.png'
import img4 from '../../Images/Cityzen3/C3_entRole.png'


class Cityzen extends Component {
    constructor() {
        super();
        this.state = {
            coverImage: {CityzenCover},  //replace with contextual info for project
            projectTitle: "Cityzen", 
            secondLine: "A participatory planning game for the zero-carbon development of the Northern Gateway, Manchester.",
            organisation: "CPU.Ai Lab at the Manchester School of Architecture",
            date: "2020 - 2021",
            portfolioURL: "https://issuu.com/nagaokastudio/docs/studio_three_25_05_21",

        }
    }

    render() {

        const { coverImage, projectTitle, secondLine, organisation, date, portfolioURL} = this.state;

        return(
            <div className="content-container">
                <div className="about-text-container">
                    <h1 className="about-title cssanimation sequence fadeInBottom">{projectTitle}</h1>
                    <h2 className="about-text">{secondLine}</h2>
                    <div className="desc-text">
                        <h4>Project Summary</h4>
                        <p>
                            Cityzen is an online multiplayer city-builder game where players must compete and
                            cooperate to create a masterplan which balances environmental sustainability with social equity.
                        </p>
                        <p>
                            The gameboard is the existing neighbourhood of Collyhurst, an area to be redeveloped under the
                            Northern Gateway regeneration project, a £1 billion investment which aims to create a newer,
                            more environmentally sustainable urban form.
                        </p>
                        <p>
                            This MA thesis was completed in partnership with the developers of the Northern Gateway, 
                            Manchester City Council, the Far East Consortium and Farrell's. The aim of this project 
                            was to create an engaging, informative and entertaining digital community planning process.                              
                        </p>

                    </div>
                    <hr></hr>
                </div>
                <div className="sidebar" >
                <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                    <img src={IssuuLogo}></img></a> 
                <p className="sd-text" >{organisation},<br></br>{date}.</p>
                </div>
                <div className="photo-container">
                    <img className="proj-img" src={img1}></img>
                    <div className="desc-text">
                    <p>Some text describing a part of the project</p>
                    </div>
                    
                    <img className="proj-img" src={img2}></img>
                    <img className="proj-img" src={img3}></img>
                    <img className="proj-img" src={img4}></img>
                </div>
            </div>
        );
    }
}

export default Cityzen;