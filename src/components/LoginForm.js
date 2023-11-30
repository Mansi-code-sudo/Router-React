import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}){

    const navigate=useNavigate();

    const[formData,setFormData]=useState({email:"",password:""});

    function changeHandler(event){
        setFormData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email address:</p>
                <input type="email" value={formData.email} name="email" onChange={changeHandler} placeholder="Enter email" required/>
            </label>

            <label>
                <p>Password</p>
                <input type="password" value={formData.password} name="password" onChange={changeHandler} required/>
                <Link to='#'>Forgot Password</Link>
            </label>
            <button>Sign In</button>
        </form>
    )
}

export default LoginForm;