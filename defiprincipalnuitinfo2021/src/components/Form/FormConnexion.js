import React from 'react';
import ReactDom from 'react-dom';
import "./FormInscription.css";
import TextField from '@mui/material/TextField';
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
    }

    render() {
        return (
            <div className="formContainer">
                <div className="inner-group">

                    <form onSubmit={this.handleSubmit} className = "containerFormInscrip">
                        <p>Inscription</p>

                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" />

                        <Button variant="outlined">Se connecter</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormConnexion;

