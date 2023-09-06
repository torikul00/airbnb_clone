import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
const Navbar = () => {
    return (
        <>
            <nav>
            <div className="flex-container">
                <div className="logo">

                <a href="/"><img src={logo} alt="logo" width="100" height="100"/></a>

                </div>
                <div className="category">
                    <div className="category-wrapper">
                        <div className='anywhere'>Anywhere</div>
                        <div className='any-week'>Any Week</div>
                        <div className='add-guest'>Add Guests  </div>
                        <div className='search-icon'><BsSearch /></div>
                    </div>
                </div>
                <div className="user-profile">
                    <div className='bnb-home-btn'><button>Airbnb your home</button></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            </nav>
        </>
    );
};

export default Navbar;