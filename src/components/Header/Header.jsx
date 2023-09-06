
import Navbar from '../Navbar/Navbar'
import Category from './Category';
import './Header.css'
import categoryData from './categoryData';
const Header = () => {

    return (
        <>
            <Navbar />
            <header>
                <div className="category-container">
                    <div className="categories-wrapper">
                        {categoryData.map(item => (

                            <Category
                              category = {item}
                              key={item.label}
                            />
                        ))}

                    </div>
                    <div className="total-tax">



                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;