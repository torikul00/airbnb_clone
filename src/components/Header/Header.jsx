import { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar'
import Category from './Category';
import './Header.css'
import categoryData from './categoryData';
import { HiOutlineAdjustments } from 'react-icons/hi'
import FilterModal from '../FilterModal/FilterModal';
import { AllRoomsContext } from '../RoomProvider';
const Header = () => {

    const [sticky, setSticky] = useState(false)
    const [showFilterModal, setShowFilterModal] = useState(false)

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    // catch window scrolling
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > prevScrollPos) {
            setSticky(true);
        }
        else {
            setSticky(false)
        }
        setPrevScrollPos(currentScrollPos);
    };
    const { showTotal, setShowTotal } = useContext(AllRoomsContext)

    return (
        <>
            {showFilterModal && <FilterModal setShowFilterModal={setShowFilterModal} />}
            <header>
                <Navbar />

                <div className={sticky ? 'sticky-header' : 'header'}>

                    <div className="category-container">
                        <div className="categories-wrapper">
                            {categoryData.map(item => (

                                <Category
                                    category={item}
                                    key={item.label}
                                />
                            ))}

                        </div>
                        <div className="category-right-side">
                            <div onClick={() => setShowFilterModal(true)} className='filter-container'>
                                <div className='filter-icon'><HiOutlineAdjustments /></div>
                                <p>Filters</p>
                            </div>
                            <div className="total-tax">
                                <div className='tax'> <p>Display total before taxes</p></div>
                                <div>
                                    <input onClick={() => setShowTotal(!showTotal)} className="tgl tgl-light" id="cb1" type="checkbox" />
                                    <label className="tgl-btn" htmlFor="cb1"></label>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;