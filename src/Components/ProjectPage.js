// import React, { Component } from 'react'
// import Navigation from './Navigation'
// import Carousel from './Carousel'

// import TitlePg from '../Images/Cityzen3/C3_pg1.png'
// import IssuuLogo from '../Images/IssuuLogo@2x.png'

// import '../App.css'

// export default class ProjectPage extends Component {
//     constructor() {
//         super();
//         this.state = {
//             projName: null,
//             proj2ndLine: null,
//             projDesc: null,
//             img1: TitlePg,
//             img2: null,
//             img3: null,
//             img4: null,
//             img5: null,
//             img6: null,
//             img7: null,
//             img8: null,
//             img9: null
//         }
//     }

//     render() {
//         return(
//             <>
//             <Navigation/>
//                 <div className="content-container-projects">
//                   <div className="project-desc-container">      
//                     <h1 className="about-title cssanimation sequence fadeInBottom">Cityzen 3</h1>
//                     <h2 className="about-text"> 
//                             A participatory planning game<br></br>
//                             for zero-carbon development of <br></br>
//                             the Northern Gateway, Manchester<br></br>
//                           </h2>
//                     <div className="external-links">
//                     <a href="https://issuu.com/nagaokastudio/docs/studio_three_25_05_21"
//                         target="_blank" rel="noopener noreferrer" >
//                       <img className="social-icon" src={IssuuLogo} style={{marginBottom:"0.25rem"}}></img>
//                     </a>
//                     <div className="proj-long-desc">
//                       <h3>Project Description</h3>
//                       <hr></hr>
//                     <p>
//                       Cityzen was my final MA thesis at the CPU.Ai lab within the 
//                       Manchester School of Architecture. The project ran for the entire academic year
//                       (October 2020 - May 2021).
//                     </p>
//                     <p>
//                       For more information on the Northern Gateway, please  
//                       <a href="https://northerngatewaymanchester.co.uk/"
//                       target="_blank" rel="noopener noreferrer"
//                       > click here.</a>
//                     </p>
//                     <hr></hr>
//                     </div>
//                       <div className="back-button" style={{marginTop:"1rem"}}>
//                         <a href="/projects">Back to projects</a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="photo-container">
//                     <Carousel
//                       img1={TitlePg}
//                     />
//                   </div>
//                 </div>
//             </>
//             )
//     }
// }