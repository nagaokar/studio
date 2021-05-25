import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation'

function App() {
  return (
    <div classname="content-container" style={{backgroundColor:"rgb(53,45,57)"}}>
     <Navigation/>
     <div className="body">
       <p>lorem ipsum</p>
     </div>
    </div>
  );
}

export default App;
