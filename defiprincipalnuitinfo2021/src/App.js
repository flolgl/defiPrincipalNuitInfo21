import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FormConnexion from "./components/Form/FormConnexion";
import FormInscription from "./components/Form/FormInscription";
import { Routes, Route, Link } from "react-router-dom";
import PageTPL from "./components/PageTPL/PageTPL";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Interventions from "./pages/Interventions";
import Sauveteurs from "./pages/Sauveteurs";
import Sauves from "./pages/Sauves";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PageTPL variant="contained" />} />
          <Route
            path="/connexion"
            element={<FormConnexion variant="contained" />}
          />
          <Route
            path="/interventions"
            element={<Interventions variant="contained" />}
          />
          <Route
            path="/sauveteurs"
            element={<Sauveteurs variant="contained" />}
          />
          <Route
            path="/sorties"
            element={<Sauves variant="contained" />}
          />
          <Route
            path="/inscription"
            element={<FormInscription variant="contained" />}
          />
          <Route
            path="/ajouter"
            element={<FormConnexion variant="contained" />}
          />
        </Routes>
        <Footer stateDark={darkMode} setStateDark={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
