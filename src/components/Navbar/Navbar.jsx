import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.svg';
import { BsSearch } from 'react-icons/bs';
import { RiGlobalLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { HiMiniXMark } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {

    const [openProfileDropdown, setOpenProfileDropdown] = useState(false)
    const [showSearchBox, setShowSearchBox] = useState(false)
    const [showTab, setShowTab] = useState('')
    const [dateChanged, setDateChanged] = useState(false)
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const startDate = format(date[0].startDate, 'MMM d')
    const endDate = format(date[0].endDate, 'MMM d')

    // const { setRooms, showSearchQuery, setShowSearchQuery } = useRooms();
    const [infants, setInfants] = useState(0)
    const [adults, setAdults] = useState(0)
    const [pets, setPets] = useState(0)
    const [children, setChildren] = useState(0)
    let guests = adults + children;

    const resetAgeValue = () => {
        setAdults(0)
        setChildren(0)
        setInfants(0)
        setPets(0)

    }
    const navigate = useNavigate()
    return (

        <nav>
            {showSearchBox && <div onClick={() => setShowSearchBox(false)} className="backdrop"></div>}
            <div className="nav">
                {/* search box */}
                {showSearchBox && <>
                    <div data-aos="zoom-in" data-aos-once="true" className="search-box-container">
                        <div className={showTab !== '' ? 'search-box-active' : 'search-box'}>
                            {showTab === 'outCalender' && <div className="calender-container">
                                <DateRange
                                    rangeColors={['#FF385C']}
                                    className='date-range'
                                    editableDateInputs={true}
                                    onChange={item => {
                                        setDate([item.selection])
                                        setDateChanged(true)
                                    }}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={date}
                                    direction="horizontal"
                                />
                            </div>}
                            {showTab === 'InCalender' || showTab === 'anyWeek' ? <div className="calender-container">
                                <DateRange
                                    rangeColors={['#FF385C']}
                                    className='date-range'
                                    editableDateInputs={true}
                                    onChange={item => {
                                        setDate([item.selection])
                                        setDateChanged(true)
                                    }}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={date}
                                    direction="horizontal"
                                />
                            </div> : ''}
                            <div onClick={() => setShowTab('anyWhere')} className={showTab === 'anyWhere' ? 'src-category1-active ' : 'src-category1'}>
                                <p className='src-box-title'>Where</p>
                                <p className='src-box-stitle'><input placeholder='Search-destination' type="text" name="" className='search-des' /></p>
                            </div>

                            <div className='check'>

                                <div onClick={() => setShowTab('InCalender')} className={showTab === 'InCalender' || showTab === 'anyWeek' ? 'check-container-active' : 'check-container'}>
                                    <p className='src-box-title'>Check in</p>
                                    <p className='src-box-stitle'>{startDate}</p>
                                </div>
                                <div onClick={() => setShowTab('outCalender')} className={showTab === 'outCalender' ? 'check-container-active' : 'check-container'}>
                                    <p className='src-box-title'>Check out</p>
                                    <p className='src-box-stitle'>{endDate}</p>
                                </div>
                            </div>
                            <div onClick={() => setShowTab('age')} className={showTab === 'age' || showTab === "addGuest" ? 'src-category-active' : 'src-category'}>

                                {showTab === "addGuest" || showTab === 'age' ? <div data-aos="zoom-in" data-aos-once="true" className="age-modal-container">
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Adults</p>
                                            <p className='age-limit'>Age 13 or above</p>
                                        </div>
                                        <div>
                                            <button onClick={() => setAdults(adults - 1)} disabled={adults === 0 && true} className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>{adults}</span> <button onClick={() => setAdults(adults + 1)} disabled={adults === 10 && true} className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Children</p>
                                            <p className='age-limit'>Ages 2–12</p>
                                        </div>
                                        <div>
                                            <button disabled={children === 0 && true} onClick={() => setChildren(children - 1)} className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>{children}</span> <button disabled={children === 6 && true} onClick={() => setChildren(children + 1)} className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Infants</p>
                                            <p className='age-limit'>Under 2</p>
                                        </div>
                                        <div>
                                            <button onClick={() => setInfants(infants - 1)} disabled={infants === 0 && true} className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>{infants}</span> <button onClick={() => setInfants(infants + 1)} disabled={infants === 5 && true} className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                    <hr className="age-devider" />
                                    <div className='age-wrapper'>
                                        <div>
                                            <p className='age-title'>Pets</p>
                                            <p className='age-limit'>Bringing a service animal?</p>
                                        </div>
                                        <div>
                                            <button onClick={() => setPets(pets - 1)} disabled={pets === 0 && true} className='age-btn'><div className='count-btn'><AiOutlineMinus /></div></button> <span className='age-count'>{pets}</span> <button disabled={pets === 5 && true} onClick={() => setPets(pets + 1)} className='age-btn'><div className='count-btn'><AiOutlinePlus /></div></button>
                                        </div>

                                    </div>
                                </div> : ''}
                                <p className='src-box-title'>Who</p>
                                <p className='src-box-stitle'>{guests ? guests + 'guest,' : ''}
                                    {infants > 0 || pets > 0 || guests > 0 ? '' : 'Add Guests'}
                                    {infants ? '' + infants + ' Infants,' : ''}    {pets ? ' ' + pets + 'Pe..' : ''}
                                </p>
                                <div className='guest-search'>
                                    <BsSearch className='gsearh-icon' />
                                </div>
                                {infants > 0 || pets > 0 || guests > 0 ? <div onClick={() => resetAgeValue()} className='reset-btn'><HiMiniXMark /></div> : ''}
                            </div>

                        </div>
                    </div>
                </>
                }
                {/* search box */}
                <div className="flex-container">
                    <div className="logo">

                        <Link to="/"><img src={logo} alt="logo" width="100" height="100" /></Link>

                    </div>
                    {showSearchBox ? <></> : <div data-aos-once="true" data-aos="zoom-out" onClick={() => setShowSearchBox(true)} className="category">
                        <div className="category-wrapper">
                            <div onClick={() => setShowTab('anyWhere')} className='anywhere'>Anywhere</div>
                            <div onClick={() => setShowTab('anyWeek')} className='any-week'>Any Week</div>
                            <div onClick={() => setShowTab('addGuest')} className='add-guest'>Add Guests  </div>
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