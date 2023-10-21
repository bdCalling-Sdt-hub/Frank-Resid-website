import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';

import About from './Pages/About/About';
import PrivacyAndTerm from './Pages/Privacyandterm/PrivacyAndTerm';


function App() {
  

  return (
    <>
      <Router>
          <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/policy-term' element={<PrivacyAndTerm/>}/>
            
          </Routes>
     </Router>

    </>
  )
}

export default App
