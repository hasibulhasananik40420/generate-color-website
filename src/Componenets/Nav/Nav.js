import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
              <Link className='mr-6 font-serif font-medium text-xl' to='/login'>Login</Link>
          </div>

        </nav>
    );
};

export default Nav;