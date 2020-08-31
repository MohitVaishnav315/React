import React from 'react';
import ReactDOM from 'react-dom';
const DateTime = () =>
{

    return <>
    <h1> My name is Prakshee Rajpurohit</h1>
    <p> Today's Date is {new Date().getDate()+"/"+ new Date().getMonth()+"/"+new Date().getFullYear()}</p>
    <p>Today's Time is {new Date().getTime()}</p>
    </>
}
export default DateTime;