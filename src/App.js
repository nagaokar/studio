import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
// import Navigation from './Components/Navigation'

export default function App() {
  return (
    <Router>
        <main>
          <nav>
            <ul>
              <li><Link className="text-link" to="/">Home</Link></li>
              <li><Link className="text-link" to="/about">About</Link> </li>
              <li><Link className="text-link" to="/projects">Projects</Link> </li>
            </ul>
          </nav>
          
          <Switch>          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route render={() => <h1>404: Page not found</h1>} />
          </Switch>

        </main>
    </Router>
  );
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
  </Fragment>
);

const About = () => (
  <Fragment>
    <h1>About</h1>
  </Fragment>

);

const Projects = () => (
  <Fragment>
    <h1>Projects</h1>
  </Fragment>

);