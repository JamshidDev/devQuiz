import React from "react";
import ReactDOM from "react-dom";
import ChangeState from "./Componets/ChangeSate"


const username="Jamshid";
ReactDOM.render(
    <ChangeState user={username}/>
    , document.getElementById("root")
);
