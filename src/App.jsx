import './App.css';
import HomeBody from './components/HomeBody';
import Destination from './components/Destination';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Mars from './components/Mars';
import Moon from './components/Moon';
import Europa from './components/Europa';
import Titan from './components/Titan';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div className="BG">
        <Routes>
          <Route exact path="/" element={<HomeBody />} /> 
          <Route exact path="Destination" element={<Destination />} >
            <Route exact path="Moon" element={< Moon/>}></Route>  
            <Route exact path="Mars" element={< Mars/>}></Route>  
            <Route exact path="Europa" element={< Europa/>}></Route>  
            <Route exact path="Titan" element={< Titan/>}></Route>  
          </Route> 
          <Route exact path="Crew" element={<Crew />} /> 
          <Route exact path="Technology" element={<Technology />} /> 
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
