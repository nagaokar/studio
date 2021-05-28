import react from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
    return(
        <nav classname="nav-bar" >
            <ul>
                <li><Link className="text-link" to="/">Home</Link></li>
                <li><Link className="text-link" to="/about">About</Link> </li>
                <li><Link className="text-link" to="/projects">Projects</Link> </li>
                <li><Link className="text-link" to="/contact">Contact</Link> </li>
            </ul>
        </nav> 
    );
}

export default Navigation;