import * as React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"
import FormInscription from "./components/Form/FormInscription"
import FormAjout from "./components/Form/FormAjout"
import Button from '@mui/material/Button';
import { Routes, Route, Link } from "react-router-dom";
import PageTPL from "./components/PageTPL/PageTPL"
import Interventions from './pages/InterventionCarte';
import Intervention from './pages/Interventions';
=======
import Footer from "./components/Footer/Footer";
import FormConnexion from "./components/Form/FormConnexion";
import FormInscription from "./components/Form/FormInscription";
import { Routes, Route, Link } from "react-router-dom";
import PageTPL from "./components/PageTPL/PageTPL";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
>>>>>>> c017e618a1de1a41f8b414028348b9a888d6540e

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="App">
      <Navbar />
      <BackgroundVideo />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<PageTPL variant="contained"/>} />
        <Route path="/connexion" element={<FormConnexion variant="contained"/>} />
        <Route path="/inscription" element={<FormInscription variant="contained"/>} />
        <Route path="/ajouter" element={<FormAjout variant="contained"/>} />
        <Route path="/intervention" element={<Intervention variant="contained"/>} />
    
=======
        <Route path="/" element={<PageTPL variant="contained" />} />
        <Route
          path="/connexion"
          element={<FormConnexion variant="contained" />}
        />
        <Route
          path="/inscription"
          element={<FormInscription variant="contained" />}
        />
        <Route
          path="/ajouter"
          element={<FormConnexion variant="contained" />}
        />
>>>>>>> c017e618a1de1a41f8b414028348b9a888d6540e
      </Routes>
      <Footer stateDark = {darkMode} setStateDark ={setDarkMode}/>
      
      
    </div>
    </div>
  );
}

export default App;
