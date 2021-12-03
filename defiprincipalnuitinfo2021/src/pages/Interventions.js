import React, { Component } from 'react';
import ReactDom from 'react-dom';
import InterventionCarte from './InterventionCarte';
import "./Interventions.css"

class Interventions extends Component{

    constructor() {
        super();
        this.state = {
          data: [],
          dataLoaded: false
        };
    }

    
    renderInfo(name, date, id){
        return (
            <InterventionCarte name={name} date={date} id={id}></InterventionCarte>
        )
    }

    componentDidMount() {
        fetch("https://5aab-93-22-150-187.ngrok.io/api/interventions")
            .then(res => res.json())
            //.then(json => this.updateWithMonth(json))

            .then(json =>{
                this.setState({
                    data: json,
                    dataLoaded: true
                })
            })
        ;
    }


    render(){
        var items = [];
        if(!this.state.dataLoaded)
            return(
                <div className="">Loading...</div>
            )

        return (
            <div className="interventionsContainer">
                {this.state.data.forEach((value, index) => {
                    console.log(value);
                    items.push(this.renderInfo(value.nom, value.dateInter, value.id));
                })}

                {items}
            </div>
        )
    }
    


}

export default Interventions;