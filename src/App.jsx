import './App.css';
import HomeBody from './components/HomeBody';
import Destination from './components/Destination';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Crew from './components/Crew';
import Technology from './components/Technology';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="BG" >
        <Routes>
          <Route exact path="/" element={<HomeBody />} /> 
          <Route exact path="/Destination" element={<Destination />} >
            <Route exact path=':planet'></Route>  
          </Route> 
          <Route exact path="/Crew" element={<Crew />} /> 
          <Route exact path="/Technology" element={<Technology />} /> 
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
