import Signup from "../pages/Signup";
import FrameImg from '../assets/frame.png';
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



function Template({title, desc1, desc2, image, formtype, setIsLoggedIn}){
    return (

        <div>

        <div>
            <h1>{title}</h1>

            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype==='signup'?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div>
                <div></div>
                <div>OR</div>
                <div></div>
            </div>

            <button>
                <p>Sign up with Google</p>
            </button>
        </div>


        <div>

            <img src={FrameImg} width={558} height={504} loading="lazy"/>
            <img src={image} width={558} height={490} loading="lazy"/>
        </div>
        </div>
            
    )
}

export default Template;