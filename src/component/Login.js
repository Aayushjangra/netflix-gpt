import {useState ,useRef} from "react";
import Header from "./Header";
import {checkValidData} from "../Utils/validate";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);

   
const email = useRef(null);
const passward = useRef(null);

const handleButtonClick= () => {

  const message = checkValidData(email.current.value , passward.current.value );
  setErrorMessage(message);

  //sign // sign up

};

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};

  return (
    <div> 
      <Header/>

      <div className = "absolute">
      <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
      alt ="logo"
      />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounder-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"} </h1>
          { !isSignInForm && ( <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
        )}
          < input ref={email}  type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        
        <input ref={passward} type="passward" placeholder="Passward" className="p-4 my-4 w-full bg-gray-700"/>

         <p className ="text-red-500 font-bold text-lg py-2"> {errorMessage} </p>


        <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonClick} >   {isSignInForm ? "Sign In" : "Sign up" }
        </button>
       <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >
       {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>

      </form>
    </div>
  );
};

export default Login
