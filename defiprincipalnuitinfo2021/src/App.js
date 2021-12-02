import * as React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"
import FormInscription from "./components/Form/FormInscription"
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import PageTPL from './components/PageTPL/PageTPL';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<PageTPL variant="contained"/>} />
        <Route path="/connexion" element={<FormConnexion variant="contained"/>} />
        <Route path="/inscription" element={<FormInscription variant="contained"/>} />
        <Route path="/ajouter" element={<FormConnexion variant="contained"/>} />
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;