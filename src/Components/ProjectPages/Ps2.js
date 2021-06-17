import react from 'react'
import { Component } from 'react'
import ScrollToTop from '../ScrollToTop';

import '../../App.css';

import IssuuLogo from '../../Images/Icons/IssuuLogo@2x.png'

// Project Info ======================================
import CityzenCover from '../../Images/CoverImages/CityzenCover.png'
import img1 from '../../Images/PS2/PS2Rend1.png'
import img2 from '../../Images/PS2/PS2Section.png'
import img3 from '../../Images/PS2/PS2Structure.png'
import img4 from '../../Images/PS2/PS2Historical.png'


class Cityzen extends Component {
    constructor() {
        super();
        this.state = {
            coverImage: {CityzenCover},  //replace with contextual info for project
            projectTitle: "Syntactical Restoration", 
            secondLine: "Adaptive Re-Use of the Grade II listed 'Righton Building' in partnership with MMU Estates. ",
            organisation: "CPU.Ai Lab at the Manchester School of Architecture",
            date: "Jan - May 2020",
            portfolioURL: "",

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
                        The Righton Building was constructed in 1905 and became grade II listed in 1991. Adaptive Re-use reconfigures
                        the building programme for resilience by projecting the buildings future using current trends and data and spatially configured using
                        space syntax, a theory for measuring networks. 
                        </p>
                        <p>
                        Presupposing widespread adoption of Big Data in building management through Internet of Things (IoT), 
                        my approach addresses the predicted spatial requirements of implementation.         
                        </p>
                        <p>
                        Adaptivity is expressed programmatically as the ability to create, metabolise and implement emergent 
                        technologies to enhance and expand the delivery of education in parallel with environmental monitoring 
                        and control of the existing physical estate.
                        </p>

                    </div>
                    <hr style={{marginTop:"2rem"}}></hr>
                </div>
                {/* ======================================= SIDEBAR ======================================= */}
                <div className="sidebar" >
                {/* <a href={portfolioURL} target="_blank" rel="noopener noreferrer">
                    <img src={IssuuLogo}></img></a>  */}
                <p className="sd-text" >{organisation},<br></br>{date}.</p>
                </div>
                {/* ======================================= PROJECT DETAILS ======================================= */}
                <div className="photo-container">
                    <img className="proj-img" src={img1}></img>
                    <div className="desc-text">
                        <h3>Space Syntax</h3>
                        <p>
                        Space Syntax is a set of theories and techniques devised by UCL's Bill Hillier and Julianne Hanson used to analyse spatial configurations.
                        </p>
                        <p>
                        We have used Space Syntax measures to quantify and understand programmatic relationships and, as we are re-programming the Righton Building, 
                        these techniques have been used to analyse the spatial configuration efficacy of the existing building, programmatic precedents, 
                        and our proposal, to determine the success of our project.
                        </p>
                    </div>
                    <img className="proj-img" src={img2}></img>
                    <div className="desc-text">
                        <h3>MMU +</h3>
                        <p>
                        For this project, the aim was to reinvigorate the building through understanding how big data, IoT and environmental monitoring
                        will play a larger role in the decarbonisation of Manchester Metropolitan University's All Saints campus.                          
                        </p>
                        <p>
                        In addition, a new Small-Medium Enterprise (SME) office was inserted into the site, cementing the Righton building as a hub for 
                        emergent technologies. Securing innovation as the primray building purpose ensures the building remains at the forefront of the 
                        digital envelope.                         
                        </p>
                    </div>
                    <img className="proj-img" src={img3}></img>
                    <div className="desc-text">
                        <h3>Temporality of Spatial Co-ordination </h3>
                        <p>
                        The early implementation of space syntax therefore provides a method for the building programme to be tracked over time,
                        where the varying requirements of physical and digital infrastructures can be inserted into future restoration efforts.
                        This log can be exhibited in combination with the historical facade and internal features as a chronicle of the building's rich
                        history.                            
                        </p>
                    </div>
                    <img className="proj-img" src={img4}></img>
                    {/* <div className="desc-text">
                        <h3>Full Portfolio</h3>
                        <p>
                            If you'd like to view the full portfolio, you can do so by clicking  
                            <a href={portfolioURL}
                               target="_blank" rel="noopener noreferrer"
                            > here</a>.<br></br>                   
                        </p>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Cityzen;