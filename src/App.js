import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";




class App extends React.Component {

  render() {
    return(
      <div className="container">
        <br/>
        <PersonCard  firstName ="Doe" lastName ="Jane" age={45} haircolor="black"/>
        <PersonCard  firstName ="Smith" lastName ="John" age={88} haircolor="Brown"/>
        <PersonCard  firstName ="Fillmore" lastName ="Millard" age={50} haircolor="Brown"/>
        <PersonCard  firstName ="Andres" lastName ="Estrada" age={35} haircolor="Brown"/>
      </div>
    );
  }

}

export default App;
