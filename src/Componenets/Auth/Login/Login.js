import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
   
      const [userInfo ,setUserInfo] = useState({
        email: "" ,
        password : "" 
      })
    
    //   2.02 hour

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

    const handleLogIn =(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(userInfo.email,userInfo.password)
    
    }


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
       if (user) {
           navigate(from , {replace: true});
       }
   }, [user]);

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


    

    return (
        <div className='login-container'>
            <div className="login-title">Login</div>
            <form onSubmit={handleLogIn} className='login-form'>
              <input onChange={handleEmailChange} type="email" name="" id="" placeholder='Email' />
               {errors?.errorEmails && <p className='error-message'>{errors.errorEmails}</p>}
               <div className='relative'>
              <input onChange={handlePasswordChange} type={showPassword ? 'text' : 'password'} name="" id="" placeholder='Enter Password' />
              {errors?.errorPassword && <p className='error-message'>{errors.errorPassword}</p>}
              <p><img onClick={()=>setShowPassword(!showPassword)} className='w-[30px] absolute top-1 right-3 mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Antu_redeyes.svg/120px-Antu_redeyes.svg.png" alt="" /></p>
               </div>
               <button>Login</button>
                {/* {hookError && <p className='error-message'> {hookError?.message}</p>} */}
                <ToastContainer />
            </form>
             <p className='mt-3'> Create an account? <Link to='/singup'> <span className='text-red-400 ml-2'>Sing Up</span></Link></p>
        </div>
    );
};

export default Login;