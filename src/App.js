import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation'
import Projects from './Components/Projects'

function App() {
  return (
  <>
  <Navigation/>
  <Projects />

  <div className="content-container" style={{paddingLeft:"2.5rem"}}>
    <p>Welcome to the website.</p>
  </div>
  </>
  );
}

export default App;
