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
            projectTitle: "Dissertation", 
            secondLine: "Emergence of Institutional Investors in Post-Crisis housing markets. ",
            organisation: "Supervisor: Leandro Minuchin (University of Manchester)",
            date: "2020",
            portfolioURL: "https://issuu.com/nagaokastudio/docs/ma5_financialisation_of_housing_dissertation.docx",

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
                        <h4>Abstract</h4>
                        <p>
                        This dissertation argues that the emergence of institutional investors in post-2008 housing markets 
                        has generated a novel architectural typology re-defining the geographies of extraction. 
                        These architectural materialisations disguise a vast network of financialised service infrastructures 
                        as a sociotechnical object which, through deployment of neo-marxist theories of urbanisation and 
                        political ecology, are uncovered as mechanisms for renewed cycles of capital accumulation via case 
                        study methodology (Yin, 1981).
                        </p>
                        <p>
                        These architectural materialisations capitalise on housing dispossession 
                        through reinvigoration of the Private Rented Sector, which has grown continuously since the neo-liberal 
                        Thatcher era. (Rolnik, 2019) These novel asset classes in the Private Rented Sector signal an 
                        acceleration of financialised urban (re)production by further disintegrating housing as a public good 
                        and commodifies communities for the maximisation of profit.

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
                    {/* <img className="proj-img" src={img1}></img> */}
                    <div className="desc-text">
                        {/* <h3>Read full dissertation</h3> */}
                        <p>
                        To read the full document, 
                        <a href={portfolioURL} target="_blank" rel="noopener noreferrer"> click here</a>                        
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Cityzen;