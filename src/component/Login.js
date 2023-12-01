import {useState ,useRef} from "react";
import Header from "./Header";
import {checkValidData} from "../Utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../Utils/firebase";
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL } from "../Utils/constant";




const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
   const [errorMessage, setErrorMessage] = useState(null);

   const dispatch = useDispatch();

const name = useRef(null);
const email = useRef(null);
const passward = useRef(null);


const handleButtonClick= () => {
  const message = checkValidData(email.current.value , passward.current.value );
  setErrorMessage(message);

  if (message) return;

  if (!isSignInForm){
    createUserWithEmailAndPassword(auth, email.current.value , passward.current.value )
  .then((userCredential) => {
     //Signed In 
     const user = userCredential.user;
     updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      const {uid, email,displayName }= auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
      
    }).catch((error) => {
      setErrorMessage(error.Message);

    });

     

  })
    .catch ((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setErrorMessage(errorCode + "-"+ errorMessage);
    });


  
  }else {
    //sign in logic
    signInWithEmailAndPassword(auth, email.current.value , passward.current.value)
    .then((userCredential) =>{
      const user = userCredential.user;
     
    })
    .catch ((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-"+ errorMessage);
    });
  }

  };

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};

  return (
    <div> 
      <Header/>

      <div className = "absolute">
      <img src ={BG_URL}
      alt ="logo"
      />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounder-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"} </h1>
          { !isSignInForm && ( <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>
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
