import React, { useState } from 'react';
const Event = () =>
{    const color="purple";
     const name="click me";
    const [c,setColor] = useState(color);
    const[n,setName] = useState(name);
    const change =()=>
    {
        setColor("green");
        setName(" hello 🙂 ");
    }
        return <div style={{backgroundColor:c}}>
             <button onClick={change}>{n}</button>
    </div>

}
export default Event;