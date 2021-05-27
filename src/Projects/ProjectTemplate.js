import react from 'react'
import Navigation from '../Components/Navigation'
import PlaceholderText from '../Components/PlaceholderText'
import './ProjectPage.css'

const projectTemplate = () => {
    return(
        <div>
            <img className="cover-image" src="https://via.placeholder.com/1920"></img>
            <div className="cover-image-text">
                <h1 className="project-title">Project Title</h1>
                <h3>CPU.Ai Lab at the Manchester School of Architecture</h3>
                <time>2020-21</time>
            </div>
            <div className="grid-container">
{/* ============================= ABOUT =============================  */}
                <div className="section-heading"><h3>Section Title</h3></div>
                <div className="section-text"><PlaceholderText/></div>
{/* ============================= SECTION TITLE =============================  */}
                <div className="section-heading"><h3>Section Title</h3></div>
                <div className="section-text"><PlaceholderText/></div>
{/* ============================= PORFOLIO CAROUSEL =============================  */}



{/* ============================= End of project details =============================  */}
            </div>
        </div>
    );
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