import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import './Login.css'
const Login = () => {
   
      const [userInfo ,setUserInfo] = useState({
        email: "" ,
        password : "" 
      })
   

       const [errors , setErrors] = useState({
          errorEmails:"",
          errorPassword: "" ,
          errorGenerall:""
       })
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useSignInWithEmailAndPassword(auth);


    const handleEmailChange = (e)=>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail=  emailRegex.test(e.target.value)
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            setErrors({...errors ,errorEmails:"" })
        }
        else{
            setErrors({...errors, errorEmails: "Invalid Email"})
            setUserInfo({...userInfo , email: ""})
        }
       
    }
     
    const handlePasswordChange = (e)=>{
        
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password:e.target.value})
            setErrors({...errors, errorPassword:""})

        }
        else{
            setErrors({...errors , errorPassword:"Password must be 6 Character"})
            setUserInfo({...userInfo, password:""})
        }
       
    }

    const handleLogIn =(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(userInfo.email,userInfo.password)
    
    }

    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form onSubmit={handleLogIn} className='login-form'>
              <input onChange={handleEmailChange} type="email" name="" id="" placeholder='Email' />
               {errors?.errorEmails && <p className='error-message'>{errors.errorEmails}</p>}
              <input onChange={handlePasswordChange} type="password" name="" id="" placeholder='Enter Password' />
              {errors?.errorPassword && <p className='error-message'>{errors.errorPassword}</p>}
               <button>Login</button>
                {/* {error && <p className='error-message'> {error}</p>} */}
               
            </form>
        </div>
    );
};

export default Login;