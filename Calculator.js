import React from 'react';
import ReactDOM from 'react-dom';

const Calculator = () =>
{ let a,b;
    
    function sum(a, b)
    {
       return a+b;
    }
    function sub(a, b)
    {
       return a-b;
    }
    function mul(a, b)
    {
       return a*b;
    }
    function div(a, b)
    {
       return a/b;
    }

    return <>
    <h1> my calculator</h1>
    <ul>
        <li> sum of two numbers is : {sum(10,2)}</li>
        <li> sub of two numbers is : {sub(10,2)}</li>
        <li> mul of two numbers is : {mul(10,2)}</li>
        <li> div of two numbers is : {div(10,2)}</li>

    </ul>
    </>
}
export default Calculator;