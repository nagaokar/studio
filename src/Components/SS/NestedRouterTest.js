import react from 'react'
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import PlaceholderText from '../PlaceholderText';
import './ProjectGrid.css'
import Projects from '../../App'

export default function ProjectsGrid() {
    
    let { path, url } = useRouteMatch;
    return (
        <>
            <div>
                <ul>
                    <li> <Link to={`${url}/cityzen1`}>Cityzen1</Link> </li>
                    <li> <Link to={`${url}/cityzen2`}>Cityzen2</Link> </li>
                    <li> <Link to={`${url}/cityzen3`}>Cityzen3</Link> </li>
                </ul>

                <Switch>
                    <Route exact path={path}>Find out more</Route>
                    <Route exact path={`${path}/:projectId`}> <Project /> </Route>
                </Switch>
            </div>
        </>
    );
  }
  

function Project() {
    let { projectId } = useParams;
    return(
        <div>
            <h3>{projectId}</h3>
        </div>
    );
}