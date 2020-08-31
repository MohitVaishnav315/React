import React, { useState } from 'react';

const Form = () =>
{ 
    let value='Hello';
    const[text,setValue]=useState(value);
    const submit =() =>
{
setValue("welcome"+ " "+document.getElementById('textvalue').value)
}

   return <>
    <h1>{text}</h1>
    <input type="text" id="textvalue"/>
    <button onClick={submit}>submit</button>
    
    </>
}
export default Form;