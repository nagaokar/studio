import react from 'react'
import { Component } from 'react'
import ScrollToTop from '../ScrollToTop';

import '../../App.css';

import IssuuLogo from '../../Images/Icons/IssuuLogo@2x.png'

// Project Info ======================================
import CityzenCover from '../../Images/CoverImages/CityzenCover.png'
import img1 from '../../Images/PS1/TriangleExplain.png'
import img2 from '../../Images/PS1/notNiceRender.png'
import img3 from '../../Images/PS1/NiceRender.png'
import img4 from '../../Images/PS1/InternalRender.png'


class Cityzen extends Component {
    constructor() {
        super();
        this.state = {
            coverImage: {CityzenCover},  //replace with contextual info for project
            projectTitle: "Architect-Tron", 
            secondLine: "An interactive generative design tool for social housing in the UK. ",
            organisation: "CPU.Ai Lab at the Manchester School of Architecture",
            date: "Sept-Dec 2019",
            portfolioURL: "https://issuu.com/home/published/group_portfolio_final",

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
                        For this project, a Machine Learning Algorithm was created in Grasshopper (a visual coding interface built into
                        the 3D modelling software Rhino). Using this, an interface and digital tool was created in which users were able to
                        configure the architectural massing using easily distinguishable sliders based upon the UK government guidance on
                        housing quality.
                        </p>
                        <p>
                        This tool was applied for the design of social housing in Manchester, where Design 
                        for Manufacture and Offsite construction was utilised for the construction strategy.
                        </p>
                        <p>
                        The factors that the algorithm was fed included: environmental analysis of the selected site, demography of context and housing shortages, 
                        potential revenue of each unit type (e.g. studio, 2bed1bathroom, 2bed2bathroom, etc.), available structural systems.. etc. <br></br> 
                        This list is limited but, in essence, the programme was designed to reduce the architectural design process and 'quality' to a accounting
                        excersize, where cost/benefit analysis became the design driver.
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
                        {/* <h3>Gameboard</h3>
                        <p>
                        The gameboard is the existing neighbourhood of Collyhurst, an area to be redeveloped under the
                        Northern Gateway regeneration project, a £1 billion investment which aims to create a new family-oriented,
                        green neighbourhood at the Manchester city centre periphery.
                        </p> */}
                    </div>
                    <img className="proj-img" src={img2}></img>
                    {/* <div className="desc-text">
                        <h3>Working in partnership</h3>
                        <p>
                        This MA thesis was completed in partnership with the developers of the Northern Gateway, 
                        Manchester City Council, the Far East Consortium and Farrell's. The aim
                        was to create an engaging, informative and entertaining digital community planning process 
                        which inclusively builds towards a better tomorrow.                             
                        </p>
                    </div> */}
                    <img className="proj-img" src={img3}></img>
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