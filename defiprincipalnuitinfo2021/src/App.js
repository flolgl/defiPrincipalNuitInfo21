import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import FormConnexion from "./components/Form/FormConnexion"

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormConnexion/>

      <Footer />
    </div>
  );
}

export default App;