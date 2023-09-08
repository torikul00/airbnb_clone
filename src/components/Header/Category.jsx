import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AllRoomsContext } from "../RoomProvider";


const Category = ({ category }) => {

    const { setRooms, allRooms } = useContext(AllRoomsContext)

    const { icon: Icon, label } = category
    const location = useLocation();
    const categoryType = new URLSearchParams(location.search).get('category');
    useEffect(() => {

        if (categoryType == null) {
            setRooms(allRooms)
        }
        else {
            const specificCategoryRooms = allRooms?.filter(room => room.category === categoryType);
            setRooms(specificCategoryRooms)
        }

    }, [categoryType])

    // const specificCategoryRooms = rooms?.filter(room => room.category === categoryType);

    

    return (

        <Link to={`/?category=${label}`} className="single-category">
            <Icon className={categoryType=== label ?'category-icons-active':'category-icons'}size={24} />
            <p className={categoryType=== label?'category-label-active':'category-label'}>{label}</p>

        </Link>


    );
};

export default Category;