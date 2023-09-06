import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
    const [openProfileDropdown,setOpenProfileDropdown] = useState(false)
    return (
        <>
            <nav>
                <div className="flex-container">
                    <div className="logo">

                        <a href="/"><img src={logo} alt="logo" width="100" height="100" /></a>

                    </div>
                    <div className="category">
                        <div className="category-wrapper">
                            <div className='anywhere'>Anywhere</div>
                            <div className='any-week'>Any Week</div>
                            <div className='add-guest'>Add Guests  </div>
                            <div className='search-icon-wrapper'><BsSearch className='search-icon' /></div>
                        </div>
                    </div>
                    <div className="right-side-wrapper">
                        <div className='bnb-home-btn'><button>Airbnb your home</button></div>
                        <div className='global-container'>
                            <div className='global'> <RiGlobalLine className='global-icon' /></div>
                        </div>
                        <div onClick={()=>setOpenProfileDropdown(!openProfileDropdown)} className='profile-container'>
                            <div className={`${openProfileDropdown ? 'profile-drop': 'show-profile-drop'}`}>
                                <ul className='profile-drop-container'>
                                    <li><button>Sign up</button></li>
                                    <li><button>Log in</button></li>
                                    <hr className='hr' />
                                    <li><button>Airbnb your home</button></li>
                                    <li><button>Help Center</button></li>
                                </ul>
                            </div>
                            <div className='account-icons'><GiHamburgerMenu className='burger-icon' /></div>
                            <div className='account-icons'><FaUserCircle className='user-icon' /></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;