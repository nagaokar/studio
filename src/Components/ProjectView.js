import react from 'react'
import { Component } from 'react'

// ProjectImports ======================================


class projectTemplate extends Component {
    constructor() {
        super();
        this.state = {
            coverImage: {}, //just replace the IMG source in import
            projectTitle: "", //replace with contextual info for your project
            secondLine: "",
            date: "",
            portfolioURL: ""
        }
    }

    render() {

        const { coverImage, projectTitle, secondLine, date, portfolioURL} = this.state;

        return(
            <div className="content-container">
            <h1>{projectTitle}</h1>
            </div>

        );
    }
}

export default projectTemplate;