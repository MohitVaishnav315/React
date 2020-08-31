import React from 'react';
import ReactDOM from 'react-dom';
let time= new Date().getHours();
var obj={color:'black'};

var value='';
if (time>=1 && time<=12 )
{
    value='Good morning';
    obj.color='red';
}
else if(time >=12 && time<=19)
{
    value='good afternoon';
    obj.color='blue';
}
else{
    value='good night';
    obj.color='yellow';
}
const Greeting = () =>
{
    return <h1 style={obj}> Hello Mam, {value}</h1>
}
export default Greeting;
