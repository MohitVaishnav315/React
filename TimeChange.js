import React, { useState } from 'react';
const TimeChange = () =>
{
    const[time,setTime]=useState(new Date().toLocaleTimeString());
    const getTime = () =>
    {
        setTime(new Date().toLocaleTimeString())  ;
    }
    return <>
    <h1>{time} </h1>
    <button onClick = {getTime}> Get Time</button>
    </>

}
export default TimeChange;