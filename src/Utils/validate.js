export const checkValidData = (email, passward) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswardValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passward);


    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswardValid) return "Passward  is not valid";

    return null;



};