import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(){
        if(formData.password!==formData.confirmPassword){
            toast.error("Passwords Dont Match!")
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate('/dashboard');
    }

    return (
        <div>
        {/* student-Instructor tab */}
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                        />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
            </div>
            {/* email Add */}
            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type="password"
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                    />
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type= "password"
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                    />
                </label>
            </div>
        <button>
            Create Account
        </button>
        </form>

    </div>
    )
}

export default SignupForm;