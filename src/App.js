import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation'
import Featuare from './Components/Feature'

function App() {
  return (
  <>
  <Navigation/>
  <Feature />

  <div className="content-container" style={{paddingLeft:"2.5rem"}}>
    <p>Welcome to the website.</p>
  </div>
  </>
  );
}

export default App;
