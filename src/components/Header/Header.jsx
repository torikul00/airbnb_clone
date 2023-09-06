
import Navbar from '../Navbar/Navbar'
import Category from './Category';
import './Header.css'
import categoryData from './categoryData';
import { HiOutlineAdjustments } from 'react-icons/hi'
const Header = () => {

    return (
        <>
            <Navbar />
            <header>
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
                        <div className='filter-container'>
                            <div className='filter-icon'><HiOutlineAdjustments /></div>
                            <p>Filters</p>
                        </div>
                        <div className="total-tax">
                           <div className='tax'> <p>Display total before taxes</p></div>
                            <div>
                            <input className="tgl tgl-light" id="cb1" type="checkbox" />
                            <label className="tgl-btn" htmlFor="cb1"></label>
                            </div>

                        </div>


                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;