import { onAuthStateChanged ,signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { addUser, removeUser} from "../Utils/userSlice";
import { LOGO ,USER_AVATAR } from "../Utils/constant";


const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user)
  const navigate = useNavigate();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
     
    });
  };

  useEffect (() =>{

    const unsubscribe = onAuthStateChanged (auth, (user) => {
      if (user){
        const {uid, email,displayName }= user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName}));
      navigate("/browse");

      } else{
        dispatch(removeUser());
        navigate("/");
       
      }

  });

  // unsubscribe when compient unmounts
  return () => unsubscribe ();

  }, []);



  return (
      <div className = "absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10   flex justify-between ">
      <img  className ="w-44" 
      src ={LOGO}
      alt ="logo"
      />
      
     {user && (
      <div  className="flex p-2" >
     <img className='w-12 h-12 my-2' 
      alt ="user icons" 
src={USER_AVATAR }/>
     <button onClick={handleSignOut} className="font-bold text-white">(Sign Out) </button>
      </div>
      )}
    </div>
    
  );
};

export default Header
