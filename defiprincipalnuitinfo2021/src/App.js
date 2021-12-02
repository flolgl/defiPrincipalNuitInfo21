import * as React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<FormConnexion variant="contained"/>} />
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;