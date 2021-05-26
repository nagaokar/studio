import react from 'react'
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import PlaceholderText from '../PlaceholderText';
import './ProjectGrid.css'
import Projects from '../../App'

export default function ProjectsGrid() {
    return (
    <>
        <Router>
            <main>
            <Switch>          
                <Route path="/projects" exact component={Projects}/>
                <Route path="/cityzen1" component={Cityzen1}/>
            </Switch>
            </main>
        </Router>

        <div className="grid-container">
            {/* CITYZEN // STUDIO THREE  */}
            <article className="project-card">
                 <div>
                    <img src="https://via.placeholder.com/400"/>
                 </div>
                 <h3>Cityzen I</h3>
                 <h4>Theoretical grounding of Cityzen</h4>
                 <p><Link className="text-link" to="/projects/cityzen1">Find out more</Link></p>
             </article>

            {/* CITYZEN // STUDIO TWO  */}
             <article className="project-card">
                 <div>
                     <img src="https://via.placeholder.com/400"/>
                 </div>
                 <h3>Cityzen II</h3>
                 <h4>Technical design development</h4>
             </article>

             {/* CITYZEN // STUDIO ONE  */}
             <article className="project-card">
                 <div>
                     <img src="https://via.placeholder.com/400"/>
                 </div>
                 <h3>Cityzen III</h3>
                 <h4>Final design of the game and website</h4>
             </article>
        </div>
    </>

    );
  }
  

const Cityzen1= () => (
    <Fragment>
        <Navigation/>
        <h1>Cityzen1</h1>
    </Fragment>
)