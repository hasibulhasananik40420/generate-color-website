import React from 'react';
import { Link } from 'react-router-dom';
import demo2 from '../../../All-images/images/demo2.png'
const Header = () => {
    return (
        <div className='header-container'>

                <div className="header-title">
                <p>
                    Your Next Project Won't Be <span>HORRIBLE 😫</span>
                </p>
                <Link to="/generator">
                    <button>Try it now!</button>
                </Link>
                </div>

                <div className='header-img glowing'>
                   
                   <img src={demo2} alt="" />
                </div>


        </div>
    );
};

export default Header;