import React, {useState} from "react";


function State(){

const [age ,setAge]=useState(0)

function Plus(){
    setAge(age+1);
}
function Minus(){
    setAge(age-1);
}
    return(
        <div>
            <button onClick={Minus}>Minux</button>
            <h1>{age}</h1>
            <button onClick={Plus} >Plus</button>
        </div>
        
    )
}
export default State;