import React, { useState } from 'react';
const Login =()=>
{ const[curr,setFullName] = useState(
    {
        fname:'',
        lname:'',
        email:'',
        phone:'',
    }
);
    const submit = () =>
    {
        return alert("form submitted ✋");
    }
    const render = (event) =>
    {
        const{value,name}=event.target;
        setFullName((preValue) => {
            return{
                ...preValue,
                [name]:value,
            }
            // if(name==='fname')
            // { 
            //     return{
            //     fname:value,
            //     lname:preValue.lname,
            //     email:preValue.email,
            //     phone:preValue.phone
            //      };
            //  }
            //  else if (name==='lname')
            //  { 
            //      return{
            //      fname:preValue.fname,
            //      lname:value,
            //      email:preValue.email,
            //      phone:preValue.phone
            //       };
            //   }
            //   else if (name==='email')
            //  { 
            //      return{
            //      fname:preValue.fname,
            //      lname:preValue.lname,
            //      email:value,
            //      phone:preValue.phone
            //       };
            //   }
            //   else if (name==='phone')
            //  { 
            //      return{
            //      fname:preValue.fname,
            //      lname:preValue.lname,
            //      email:preValue.email,
            //      phone:value
            //       };
            //   }
        })
    }

    return <>
    <form onSubmit={submit}>
    <h1>Hello {curr.fname} {curr.lname}</h1>
    <p>{curr.email}</p>
    <p>{curr.phone}</p>
    <input type="text" placeholder="enter your first name" name="fname" value={curr.fname} onChange={render}/>
    <input type="text" placeholder="enter your last name" name="lname" value={curr.lname} onChange={render}/>
    <input type="email" placeholder="enter your email id" name="email" value={curr.email} onChange={render}/>
    <input type="number" placeholder="enter your contact number" name="phone" value={curr.phone} onChange={render}/>
    <button>submit</button>
    </form>
    </>

}
export default Login;