import React, {useState} from "react";

const Form1 = () =>{

    const [fullName , setFullName] = useState({
        fname: "",
        lname: "",
        email:"",
        phone:"",
    });

    const inputEvent =(event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const {value,name}=event.target;

        setFullName((preValue) =>
        {
            if(name==="fname")
            {
                return{
                    fname:value,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone,
                };
            }
            else if(name==="lname")
            {
                return{
                    fname:preValue.fname,
                    lname:value,
                    email:preValue.email,
                    phone:preValue.phone,
                }; 
            }
            else if(name==="email")
            {
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:value,
                    phone:preValue.phone,
                }; 
            }
            else if(name==="phone")
            {
                return{
                    fname:preValue.fname,
                    lname:preValue.lname,
                    email:preValue.email,
                    phone:value,
                }; 
            }
            
        })

    };

    const onSubmits = (event) =>
    {
        event.preventDefault();
        alert("Form Submitted");

    };

    return(
        <>
        <div className="main_div">
            <form onSubmit={onSubmits}>
           <div>
    <h1> Hello {fullName.fname} {fullName.lname} </h1>
    <p>{fullName.email}</p>
    <p>{fullName.phone}</p>
    <input
    type="text"
    placeholder="Enter your First Name"
    name="fname"
    onChange={inputEvent}
    value={fullName.fname}
    />
    <br/>
    <input
    type="text"
    placeholder="Enter your last name"
    name="lname"
    onChange={inputEvent}
    value={fullName.lname}
    />
    <br/>
    <input
    type="email"
    placeholder="Enter your email"
    name="email"
    onChange={inputEvent}
    value={fullName.email}
    />
    <br/>
    <input
    type="number"
    placeholder="Enter your number"
    name="phone"
    onChange={inputEvent}
    value={fullName.phone}
    />
    <br/>
    <br/>
    <button type="submit">Click me  </button>

    </div>
    </form>
    </div>
    </>  
      )
}
export default Form1;
