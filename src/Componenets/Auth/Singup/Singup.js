import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';

const Singup = () => {
     
    
    const [userInfo ,setUserInfo] = useState({
        email: "" ,
        password : "" ,
        confirmPassword:""
      })
    
   

       const [errors , setErrors] = useState({
          errorEmails:"",
          errorPassword: "" ,
          errorGenerall:""
       })
   
       const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [showPassword , setShowPassword] = useState(false)


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

    const handleConfirmPasswordChange = (e)=>{
        
        if(e.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPassword:e.target.value})
            setErrors({...errors, errorPassword:""})

        }
        else{
            setErrors({...errors , errorPassword:"Password don't match"})
            setUserInfo({...userInfo, confirmPassword:""})
        }
       
    }

    const handleSingIn =(e)=>{
        e.preventDefault()

        createUserWithEmailAndPassword(userInfo.email,userInfo.password , userInfo.confirmPassword)
    
    }

     useEffect(()=>{
        
      if(hookError){
          switch(hookError?.code){
            case "auth/invalid-email":
             toast("Invalid email provided, please provide a valid email"); 
              break
              
              case "auth/invalid-password":
                toast("Wrong password. Intruder!!")
                break;
                default:
               toast("something went wrong")
          }

      }
     } ,[hookError])
      
     const navigate = useNavigate()
      useEffect(()=>{
        if(user){
            navigate('/')
          }
      },[])

    return (
        <div className='login-container'>
            <div className="login-title">Sing Up</div>
            <form onSubmit={handleSingIn} className='login-form'>
              <input onChange={handleEmailChange} type="email" name="" id="" placeholder='Email' />
               {errors?.errorEmails && <p className='error-message'>{errors.errorEmails}</p>}
                <div className='relative'>
              <input onChange={handlePasswordChange} type={showPassword? 'text': 'password'} name="" id="" placeholder='Enter Password' />
              {errors?.errorPassword && <p className='error-message'>{errors.errorPassword}</p>}
               <p><img onClick={()=>setShowPassword(!showPassword)} className='w-[30px] absolute top-1 right-3 mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Antu_redeyes.svg/120px-Antu_redeyes.svg.png" alt="" /></p>
              </div>
              <input onChange={handleConfirmPasswordChange} type="password" name="" id="" placeholder='Confirm Password' />
               <button>Sing Up</button>
                <ToastContainer />
            </form>
            
        </div>
    );
};

export default Singup;