import './App.css';
import Home from './components/Home';
import HomeBody from './components/HomeBody';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    // <Router>
      <div className="App">
      <div className="BG" >


      {/* <Router>
       <Route path="/"> */}
        <Home />
        <HomeBody />
       {/* </Route>
      </Router> 
      <HomeBody /> */}

      
      </div>
    </div>
    // {/* </Router> */}
    
  );
}

export default App;
