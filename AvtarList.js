import React from 'react';


const AvtarList = (props) =>
{
    return  <div className="div">
    <img src={`https://joeschmoe.io/api/v1/${props.name}`}className="style" /> 
    <h1> {props.name}</h1>
    <p> {props.work}</p>
</div>
}

export default AvtarList;