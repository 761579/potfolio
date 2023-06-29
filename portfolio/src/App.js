import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import Home from './Components/Home';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';




function App() {
  return (
    <div className="App">
   
     <Router>
 
     <Routes>
    
         <Route  path="/" element={<Home/>}/>
         <Route path="/education"   Component={Education}/>
    </Routes>
     </Router>
    </div>
  );
};
export default App;
