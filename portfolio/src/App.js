import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { render } from 'react-dom';
import Home from './Components/Home.js';
import Education from './Components/Education.js';





function App() {
  return (
    <div className="App">
     
    <Router>
      <Routes>
      
      <Route path="/potfolio" element={<Navigate to="/home" replace />}/>
       <Route  path='/home' element={<Home/>} />
      </Routes>
    </Router>
   
    </div>
  );
};
export default App;
