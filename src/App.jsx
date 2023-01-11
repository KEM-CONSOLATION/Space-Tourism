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
import Douglas from './components/Douglas';
import Mark from './components/Mark';
import Victor from './components/Victor';
import Flight from './components/Flight';
import Launch from './components/Launch';
import SpacePort from './components/SpacePort';
import SpaceCapsule from './components/SpaceCapsule';
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
          <Route exact path="Crew" element={<Crew />}>
            <Route exact path='Douglas' element={<Douglas/>}></Route>
            <Route exact path='Mark' element={<Mark/>}></Route>
            <Route exact path='Victor' element={<Victor/>}></Route>
            <Route exact path='Flight' element={<Flight/>}></Route>
          </Route>
          <Route exact path="Technology" element={<Technology />}> 
            <Route exact path='Launch' element={<Launch/>}></Route>
            <Route exact path='SpacePort' element={<SpacePort/>}></Route>
            <Route exact path='SpaceCapsule' element={<SpaceCapsule/>}></Route>
          </Route>
        </Routes> 
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
