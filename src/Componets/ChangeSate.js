import React from "react"

class ChangeState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Dell",
            cpu:"4GB",
            hdd:"512GB",
            color:"black",
        }
    }

    changeLaptop=()=>{
        console.log("ok");
        this.setState({name:"acer", cpu:"8GB", hdd:"1024GB", color:"silver"});
    }


    render(){
        return(
            <>
            <ul>
                <h3>{this.props.user}</h3>
                <li>{this.state.name}</li>
                <li>{this.state.cpu}</li>
                <li>{this.state.hdd}</li>
                <li>{this.state.color}</li>
            </ul>
            <button onClick={this.changeLaptop}>Change</button>
            </>
        )
    }
}

export default ChangeState;