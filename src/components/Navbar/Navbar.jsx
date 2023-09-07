import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Navbar = () => {

    const [openProfileDropdown, setOpenProfileDropdown] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(true)
    const [showAgeModal, setShowAgeModal] = useState(false)
    return (

        <nav>
            {showSearchBox && <div onClick={() => setShowSearchBox(false)} className="backdrop"></div>}
            <div className="nav">
                {/* search box */}
                {showSearchBox && <>
                    <div data-aos="zoom-in" data-aos-once="true" className="search-box-container">
                        <div className={showAgeModal ? 'search-box-active' : 'search-box'}>
                            <div className='src-category1'>
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
                            <div onClick={() => setShowAgeModal(true)} className={showAgeModal ? 'src-category-active' : 'src-category'}>
                                {showAgeModal && <div data-aos="zoom-in"  data-aos-once="true" className="age-modal-container">
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Adults</p>
                                            <p className='age-limit'>Age 13 or above</p>
                                        </div>
                                        <div>
                                            <button className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>0</span> <button className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Children</p>
                                            <p className='age-limit'>Ages 2–12</p>
                                        </div>
                                        <div>
                                            <button className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>0</span> <button className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Infants</p>
                                            <p className='age-limit'>Under 2</p>
                                        </div>
                                        <div>
                                            <button className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>0</span> <button className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Pets</p>
                                            <p className='age-limit'>Bringing a service animal?</p>
                                        </div>
                                        <div>
                                            <button className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>0</span> <button className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                </div>}
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