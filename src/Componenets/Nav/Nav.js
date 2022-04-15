import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Nav = () => {
     const [user] = useAuthState(auth)

      const handleSingOut =()=>{
          console.log('ll');
          signOut(auth)
      }
    return (
        <nav className='flex justify-between p-4 bg-slate-200 sticky top-0'>
         
         <div className='mr-6 font-serif font-medium text-xl'>
             logo
         </div>

          <div className='mr-10'>
              <Link className='mr-6 font-serif font-medium text-xl ' to='/'>Home</Link>
              <Link className='mr-6 font-serif font-medium text-xl' to='/generator'> Generator</Link>
              <Link className='mr-6 font-serif font-medium text-xl' to='/docs'>Docs</Link>
              <Link className='mr-6 font-serif font-medium text-xl' to='/contact'>Contact</Link>
             { 
             user ?
             <button className='mr-6 font-serif font-medium text-xl' onClick={handleSingOut}> Logout</button>
             :
             <Link className='mr-6 font-serif font-medium text-xl' to='/login'>Login</Link>
            
            }         
              
               </div>


        </nav>
    );
};

export default Nav;