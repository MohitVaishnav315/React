import React, { Component } from 'react';
import "./Avtar.css";
import AvtarList from "./AvtarList";
class Avtar extends Component
{
    constructor()
    {
        super();
        this.state=
        {name:"welcome to my page "}
    }

     changetext()
    {
this.setState({name:"subscribe to my page"})
    }
    render()
    { const arr = [
        {id :1,name : "puju",work : "web developer"},
        {id : 2,name : "babu",work : "business man"},
        {id : 3,name : "juju",work : "project manager"},
        {id : 4,name : "mohit",work : "frontend developer"}
    ]
let result = arr.map((item,i) =>
{
    return  <AvtarList id ={arr[i].id} name={arr[i].name} work={arr[i].work}/>
})


    return  <div><h1> {this.state.name} </h1>
            {result}
            <button onClick={()=>this.changetext()}> Subscribe</button>
    </div>
    

    }
}
export default Avtar;