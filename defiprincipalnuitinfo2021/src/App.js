import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"
import FormInscription from "./components/Form/FormInscription"
import FormAjout from "./components/Form/FormAjout"
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import PageTPL from "./components/PageTPL/PageTPL"
import Interventions from './pages/InterventionCarte';
import Intervention from './pages/Interventions';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<PageTPL variant="contained"/>} />
        <Route path="/connexion" element={<FormConnexion variant="contained"/>} />
        <Route path="/inscription" element={<FormInscription variant="contained"/>} />
        <Route path="/ajouter" element={<FormAjout variant="contained"/>} />
        <Route path="/intervention" element={<Intervention variant="contained"/>} />
    
      </Routes>
      <Footer stateDark = {darkMode} setStateDark ={setDarkMode}/>
      
      
    </div>
    </div>
  );
}

export default App;