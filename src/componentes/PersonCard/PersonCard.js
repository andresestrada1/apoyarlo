import React from "react";

class PersonCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            age:this.props.age,
            haircolor:this.props.haircolor

        }
    }

    cambiarEdad  = () =>{
        this.setState({age: this.state.age+1})

    }


    render(){

        const {firstName, lastName} = this.props

        return(
            <div className="card">
                <h3>{firstName}, {lastName}</h3>
                <p><b>Edad: </b>{this.state.age}</p>
                <p><b>haircolor: </b>{this.state.haircolor}</p>
                <button className="bnt btn-info" onClick={this.cambiarEdad}>Boton de cumpleaños: {firstName}</button>
            </div>
        )
    }

}

export default PersonCard;