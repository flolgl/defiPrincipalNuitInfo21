import * as React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"
import Button from '@mui/material/Button';
import FormInscription from "./components/Form/FormInscription.js"

function App() {
  return (
    <div className="App">
      <div className="duMargin">

      </div>
        <FormInscription></FormInscription>
      <FormConnexion variant="contained">Hello World</FormConnexion>
      <Footer/>

    </div>
  );
}

export default App;