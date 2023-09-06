
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaUserCircle} from 'react-icons/fa'
const Navbar = () => {
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
                        <div className='profile-container'>
                            <div className='account-icons'><GiHamburgerMenu className='burger-icon'/></div>
                            <div className='account-icons'><FaUserCircle className='user-icon'/></div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;