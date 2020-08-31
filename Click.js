import React, { useState } from 'react';

const Click = () =>
{ 
let state = useState();    
const [currentValue,setCount]=useState(0);
const increase =() =>
{
    setCount(currentValue +1);
}
    
return <>
<h1>{currentValue}</h1>
<button onClick={increase} >click me</button>
</>

}
export default Click;