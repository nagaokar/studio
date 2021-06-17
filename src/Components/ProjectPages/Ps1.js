import react from 'react'
import { Component } from 'react'
import ScrollToTop from '../ScrollToTop';

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
                            Completed games are uploaded to the Cityzen Hub, a purpose built website enabling communities
                            and officials to view all previously played games with data selection features.            
                        </p>
                        <p>
                            Cityzen is conceptualised as a modern method of planning, utilising the Unity game engine and 
                            standard web development languages to formulate a more inclusive approach to city planning. 
                        </p>

                    </div>
                    <hr style={{marginTop:"2rem"}}></hr>
                </div>
                {/* ======================================= SIDEBAR ======================================= */}
                <div className="sidebar" >
                <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                    <img src={IssuuLogo}></img></a> 
                <p className="sd-text" >{organisation},<br></br>{date}.</p>
                </div>
                {/* ======================================= PROJECT DETAILS ======================================= */}
                <div className="photo-container">
                    <img className="proj-img" src={img1}></img>
                    <div className="desc-text">
                        <h3>Gameboard</h3>
                        <p>
                        The gameboard is the existing neighbourhood of Collyhurst, an area to be redeveloped under the
                        Northern Gateway regeneration project, a £1 billion investment which aims to create a new family-oriented,
                        green neighbourhood at the Manchester city centre periphery.
                        </p>
                    </div>
                    <img className="proj-img" src={img2}></img>
                    <div className="desc-text">
                        <h3>Working in partnership</h3>
                        <p>
                        This MA thesis was completed in partnership with the developers of the Northern Gateway, 
                        Manchester City Council, the Far East Consortium and Farrell's. The aim
                        was to create an engaging, informative and entertaining digital community planning process 
                        which inclusively builds towards a better tomorrow.                             
                        </p>
                    </div>
                    <img className="proj-img" src={img3}></img>
                    <div className="desc-text">
                        <h3>Cityzen Hub</h3>
                        <p>
                        The website acts as a public forum and a data analysis platform, where community engagement
                        can be quantified by city planners for real-world implementation.                             
                        </p>
                    </div>
                    <img className="proj-img" src={img4}></img>
                    <div className="desc-text">
                        <h3>Full Portfolio</h3>
                        <p>
                            If you'd like to view the full portfolio, you can do so by clicking  
                            <a href={portfolioURL}
                               target="_blank" rel="noopener noreferrer"
                            > here</a>.<br></br>                   
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cityzen;