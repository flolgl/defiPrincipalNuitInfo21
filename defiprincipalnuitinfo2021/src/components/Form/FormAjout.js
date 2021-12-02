import React from 'react';
import ReactDom from 'react-dom';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./FormAjout.css";

const Form = () => {
     return (
        <div className="container">
            <div className="formcontainer">
            <h1>Formulaire d'ajout</h1>
            
                <div className="formsousform">

                    <h1>Sauvetages</h1>
                    <TextField id="outlined-basic 1" label="Nom sauvetage" variant="outlined" />
                    <TextField id="outlined-basic 2" label="Date" variant="outlined" />
                    
                </div>
               
                <div className="formsousform">
                <h1>Sauveteurs</h1>
                    <label className="Deroulantegros" for="Sauveteurs">Sauveteurs :</label>
                        <input list="listeSauveteurs" type="text" id="Sauveteurs"></input>
                        <datalist id="listeSauveteurs">
                            <option value="Meteor"></option>
                            <option value="Pils"></option>
                            <option value="Kronenbourg"></option>
                            <option value="Grimbergen"></option>
                        </datalist>

                        <ul>
                    <li>Jean Christophe</li>
                    <li>Aurelien Dasse</li>

                </ul>

                    <label for="Sauveteursapprob">Sauveteur(s) en attente d'approbation :</label>
                        <input list="listeSauveteursapprob" type="text" id="Sauveteursapprob"></input>
                        <datalist id="listeSauveteursapprob">
                            <option value="Test"></option>
                      
                        </datalist>
                    <Button variant="contained">Valider</Button>
                    <Button variant="contained">Ajouter Sauveteur</Button>

                    
                   
                </div>

                <div className="formsousform">
                    <h1>Sauvés</h1>
                    <ul className="Liste">
                        <li>Jean Christophe</li>
                        <li>Aurelien Dasse</li>

                    </ul>
                    <label className="Deroulantegros" for="Sauve">Sauvés :</label>
                            <input list="listeSauve" type="text" id="Sauve"></input>
                            <datalist id="listeSauve">
                                <option value="Meteor"></option>
                                <option value="Pils"></option>
                                <option value="Kronenbourg"></option>
                                <option value="Grimbergen"></option>
                            </datalist>

                        <label for="Sauveapprob">Sauvé(s) en attente d'approbation :</label>
                            <input list="listeSauveapprob" type="text" id="Sauveapprob"></input>
                            <datalist id="listeSauveapprob">
                                <option value="Test"></option>
                        
                            </datalist>
                        <Button variant="contained">Valider</Button>
                        <Button variant="contained">Ajouter Sauvé</Button>
                    </div>

            </div>
        </div>
    );
}

export default Form;