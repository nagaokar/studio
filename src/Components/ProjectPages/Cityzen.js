import react from 'react'
import { Component } from 'react'
import '../../App.css';

// Project Info ======================================
import CityzenCover from '../../Images/CoverImages/CityzenCover.png'

class Cityzen extends Component {
    constructor() {
        super();
        this.state = {
            coverImage: {CityzenCover}
        , //just replace the IMG source in import
            projectTitle: "Cityzen", //replace with contextual info for your project
            secondLine: "A participatory planning game for the zero-carbon development of the Northern Gateway, Manchester",
            date: "2020 - 2021",
            portfolioURL: "https://issuu.com/nagaokastudio/docs/studio_three_25_05_21"
        }
    }

    render() {

        const { coverImage, projectTitle, secondLine, date, portfolioURL} = this.state;

        return(
            <div className="content-container">
            <h1 className="about-title">{projectTitle}</h1>
            </div>

        );
    }
}

export default Cityzen;