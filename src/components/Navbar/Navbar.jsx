import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {

    const [openProfileDropdown, setOpenProfileDropdown] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)
    return (

        <nav>
            {showSearchBox && <div onClick={() => setShowSearchBox(false)} className="backdrop"></div>}
            <div className="nav">
                {/* search box */}
                {showSearchBox && <>
                    <div data-aos="zoom-in" data-aos-once="true" className="search-box-container">
                        <div className="search-box">
                            <div className='src-category'>
                                <p className='src-box-title'>Where</p>
                                <p className='src-box-stitle'><input placeholder='Search-destination' type="text" name="" className='search-des' /></p>
                            </div>

                            <div className='check'>
                                <div className='check-container'>
                                    <p className='src-box-title'>Check out</p>
                                    <p className='src-box-stitle'>Add dates</p>
                                </div>
                                <div className='check-container'>
                                    <p className='src-box-title'>Check in</p>
                                    <p className='src-box-stitle'>Add dates</p>
                                </div>
                            </div>
                            <div className='src-category'>
                                <p className='src-box-title'>Who</p>
                                <p className='src-box-stitle'>Add guestes</p>
                                <div className='guest-search'>
                                    <BsSearch className='gsearh-icon' />
                                </div>
                            </div>

                        </div>
                    </div>
                </>
                }
                {/* search box */}
                <div className="flex-container">
                    <div className="logo">

                        <a href="/"><img src={logo} alt="logo" width="100" height="100" /></a>

                    </div>
                    {showSearchBox ? <></> : <div data-aos-once="true" data-aos="zoom-out" onClick={() => setShowSearchBox(true)} className="category">
                        <div className="category-wrapper">
                            <div className='anywhere'>Anywhere</div>
                            <div className='any-week'>Any Week</div>
                            <div className='add-guest'>Add Guests  </div>
                            <div className='search-icon-wrapper'><BsSearch className='search-icon' /></div>
                        </div>
                    </div>}
                    {showSearchBox && <div data-aos-once="true" data-aos="zoom-in" className="search-navbar">
                        <ul>
                            <li>Stays</li>
                            <li>Experiences</li>
                            <li>Online Experiences</li>
                        </ul>
                    </div>}


                    <div className="right-side-wrapper">
                        <div className='bnb-home-btn'><button>Airbnb your home</button></div>
                        <div className='global-container'>
                            <div className='global'> <RiGlobalLine className='global-icon' /></div>
                        </div>
                        <div onClick={() => setOpenProfileDropdown(!openProfileDropdown)} className='profile-container'>
                            <div className={`${openProfileDropdown ? 'show-profile-drop' : 'profile-drop'}`}>
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
            </div>
        </nav>

    );
};

export default Navbar;