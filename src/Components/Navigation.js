import react from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Navigation.css'


const Navigation = () => {
    return(
    <Router>
        <main>
          <nav className="nav-bar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
            </ul>
          </nav>
        </main>
    </Router>
    );
}

export default Navigation;