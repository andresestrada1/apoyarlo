import React, {useState} from "react";

const PersonCardFuncional = ({firstName, lastName, age, haircolor}) => {

        const [edoCivil, setEdoCivil]= useState()
        const [edad, setEdad] = useState(age)


    return(
        <div className="card">
            <small>Card Funcional</small>
            <h4>{firstName} {lastName}</h4>
            <p>
                <b>Edad: </b>{age}
            </p>
            <p>
                <b>haircolor: </b>{haircolor}
            </p>
            <p>Estado Civil</p>{edoCivil}
        </div>
    )

}

export default PersonCardFuncional;