import React from 'react';
import ReactDom from 'react-dom';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import "./FormConnexion.css";
import Button from '@mui/material/Button';

   
class FormConnexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    };
    render(){
    return (
        <div className="container">
            <div className="inner-group">
                <div className="inner-container">
                    <div className="header">
                        <h1>Connexion</h1>
                    </div>

                    <form onSubmit={event => this.handleSubmitForm(event)}>
                        <div className="p">
                        <TextField id="outlined-basic" label="Prenom" variant="outlined" fullWidth="true"/>
                        </div>
                    <br></br>
                        <div>
                        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" fullWidth="true"/>
                        </div>
                        <br></br>
                    <div className="boutton">
                        <Button variant="outlined">Se connecter</Button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
  
    
    )  
};
}
export default FormConnexion;
