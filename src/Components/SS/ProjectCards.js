import react from 'react'
import './ProjectCards.css'
import {BrowserRouter as Link, Route, Switch} from 'react-router-dom'
import { Fragment } from 'react';






// export default function ProjectCards() {
//     return(
//         <Route style={{background: "none"}}>
//             <main>
//                 <Switch>
//                     <Route path="/projects/cityzen" component={Cityzen} /> 
//                 </Switch>
//             </main>
//         </Route>
//     )
// }

// const Cityzen = () => (
//     <Fragment>
//         <div className="grid-container">
//             <article className="project-card">
//                 <div>
//                 <Link to="/projects/cityzen"><img src="https://via.placeholder.com/400"/></Link>
//                 </div>
//                 <h3>Cityzen</h3>
//                 <h4>Short description of Project</h4>
//             </article>
//         </div>
//         </Fragment>
//     );