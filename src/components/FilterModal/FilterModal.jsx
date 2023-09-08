import './FilterModal.css'
import { HiMiniXMark } from 'react-icons/hi2';
import { AiOutlineHome } from 'react-icons/ai';
import { PiWarehouse } from 'react-icons/pi';
import { BiSolidCity } from 'react-icons/bi';
import { RiHotelLine } from 'react-icons/ri';
import MultiRangeSlider from "multi-range-slider-react";
import { useContext, useEffect, useState } from 'react';
import { AllRoomsContext } from '../RoomProvider';


const FilterModal = ({ setShowFilterModal }) => {
    const [roomType, setRoomType] = useState('All type');
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(1100);
    const [bedrooms, setBedrooms] = useState(0);
    const [beds, setBeds] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [propertyType, setPropertyType] = useState([]);
    const [filteredRoom, setFilteredRoom] = useState([]);

    const { setRooms } = useContext(AllRoomsContext)

    console.log(filteredRoom)

    useEffect(() => {

        fetch(`http://localhost:5000/allRooms/filters?roomType=${roomType}&minPrice=${minPrice}&maxPrice=${maxPrice}&beds=${beds}&bedrooms=${bedrooms}&propertyType=${propertyType}&bathrooms=${bathrooms}`)

            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFilteredRoom(data)

            })
    }, [minPrice, maxPrice, beds, bedrooms, propertyType, bathrooms,roomType])

    const handleRangePrice = (e) => {
        setMinPrice(e.minValue);
        setMaxPrice(e.maxValue);
    };

    const handleShowPlace = () => {
        setRooms(filteredRoom)
        setShowFilterModal(false)
    }

    const handleBedrooms = (value) => {
        if (bedrooms === value) {
            setBedrooms(0)
        }
        else {
            setBedrooms(value)
        }
    }

    const handleBeds = (value) => {
        if (beds === value) {
            setBeds(0)
        }
        else {
            setBeds(value)
        }
    }

    const handleBathrooms = (value) => {
        if (bathrooms === value) {
            setBathrooms(0)
        }
        else {
            setBathrooms(value)
        }
    }

    const handlePropertyType = (value) => {
        if (propertyType.includes(value)) {
            const newPropertyType = propertyType.filter(property => property !== value)
            setPropertyType(newPropertyType)
        }
        else {
            setPropertyType(prev => [...prev, value])
        }
    }

    const handleClearAll = () => {
        setRoomType("All type")
        setMinPrice(50)
        setMaxPrice(1100)
        setBedrooms(0)
        setBeds(0)
        setBathrooms(0)
        setPropertyType([])
        // setRooms(allCategoryRooms)
    }

    return (
        <div className="modal-overlay">
            <div data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out" className="modal-container">
                {/* modal header */}
                <div className="modal-header">
                    <button onClick={() => setShowFilterModal(false)} type="button" className="close-btn">
                        <HiMiniXMark size={22} />
                    </button>
                    <h3 className="text-xl text-center font-semibold text-gray-900">
                        Filters
                    </h3>
                </div>

                {/* modal body */}
                <div className="modal-body">

                    {/* tab filter */}
                    <div className='tab-filter'>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className='tab-title'>Type of Place</h3>
                            <p className='tab-desc'>Search rooms, entire homes, or any type of place.</p>
                        </div>
                        <ul className="tab-container">
                            <li onClick={() => setRoomType('All type')} className={`${roomType === 'All type' ? 'active-room-type' : 'default-room-type'}`}>
                                <p>All type</p>
                            </li>

                            <li onClick={() => setRoomType('Room')} className={`${roomType === 'Room' ? 'active-room-type' : 'default-room-type'} border-x-[1px]`}>
                                <p>Room</p>
                            </li>

                            <li onClick={() => setRoomType('Home')} className={`${roomType === 'Home' ? 'active-room-type' : 'default-room-type'}`}>
                                <p>Entire home</p>
                            </li>
                        </ul>
                    </div>

                    {/* range filter */}
                    <div className='range-container'>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 className='range-title'>Price Range</h3>
                            <p className='range-desc'>Nightly prices before fees and taxes</p>
                        </div>

                        <div className="slider-container">
                            <MultiRangeSlider
                                min={50}
                                max={1100}
                                step={5}
                                ruler={true}
                                label={true}
                                preventWheel={false}
                                minValue={minPrice}
                                maxValue={maxPrice}
                                onInput={(e) => {
                                    handleRangePrice(e);
                                }}
                            />
                        </div>

                        <div className='input-container'>
                            <div className='input-field'>
                                <label htmlFor="place" className="input-label">Minimum</label>
                                <span className='dollar-symbol'>$</span>
                                <input onChange={(e) => setMinPrice(e.target.value)} type="text" name="minPrice" id="minPrice" value={minPrice} />
                            </div>

                            <div className="input-divider"></div>

                            <div className='input-field'>
                                <label htmlFor="place" className="input-label">Maximum</label>
                                <span className='dollar-symbol'>$</span>
                                <input onChange={(e) => setMaxPrice(e.target.value)} type="text" name="maxPrice" id="maxPrice" value={maxPrice} />
                            </div>
                        </div>
                    </div>

                    {/* rooms and beds filter */}
                    <div className='rooms-container'>
                        <h3 className='rooms-title'>Rooms and beds</h3>

                        <div>
                            <h4>Bedrooms</h4>
                            <div className='bedrooms'>
                                <span onClick={() => handleBedrooms(0)} className={`${bedrooms === 0 ? "active-bedroom" : "default-bedroom"}`}>Any</span>
                                <span onClick={() => handleBedrooms(1)} className={`${bedrooms === 1 ? "active-bedroom" : "default-bedroom"}`}>1</span>
                                <span onClick={() => handleBedrooms(2)} className={`${bedrooms === 2 ? "active-bedroom" : "default-bedroom"}`}>2</span>
                                <span onClick={() => handleBedrooms(3)} className={`${bedrooms === 3 ? "active-bedroom" : "default-bedroom"}`}>3</span>
                                <span onClick={() => handleBedrooms(4)} className={`${bedrooms === 4 ? "active-bedroom" : "default-bedroom"}`}>4</span>
                                <span onClick={() => handleBedrooms(5)} className={`${bedrooms === 5 ? "active-bedroom" : "default-bedroom"}`}>5</span>
                                <span onClick={() => handleBedrooms(6)} className={`${bedrooms === 6 ? "active-bedroom" : "default-bedroom"}`}>6</span>
                                <span onClick={() => handleBedrooms(7)} className={`${bedrooms === 7 ? "active-bedroom" : "default-bedroom"}`}>7</span>
                                <span onClick={() => handleBedrooms(8)} className={`${bedrooms === 8 ? "active-bedroom" : "default-bedroom"}`}>8+</span>
                            </div>
                        </div>

                        <div>
                            <h4>Beds</h4>
                            <div className='beds'>
                                <span onClick={() => handleBeds(0)} className={`${beds === 0 ? "active-bed" : "default-bed"}`}>Any</span>
                                <span onClick={() => handleBeds(1)} className={`${beds === 1 ? "active-bed" : "default-bed"}`}>1</span>
                                <span onClick={() => handleBeds(2)} className={`${beds === 2 ? "active-bed" : "default-bed"}`}>2</span>
                                <span onClick={() => handleBeds(3)} className={`${beds === 3 ? "active-bed" : "default-bed"}`}>3</span>
                                <span onClick={() => handleBeds(4)} className={`${beds === 4 ? "active-bed" : "default-bed"}`}>4</span>
                                <span onClick={() => handleBeds(5)} className={`${beds === 5 ? "active-bed" : "default-bed"}`}>5</span>
                                <span onClick={() => handleBeds(6)} className={`${beds === 6 ? "active-bed" : "default-bed"}`}>6</span>
                                <span onClick={() => handleBeds(7)} className={`${beds === 7 ? "active-bed" : "default-bed"}`}>7</span>
                                <span onClick={() => handleBeds(8)} className={`${beds === 8 ? "active-bed" : "default-bed"}`}>8+</span>
                            </div>
                        </div>

                        <div>
                            <h4>Bathrooms</h4>
                            <div className='bathrooms'>
                                <span onClick={() => handleBathrooms(0)} className={`${bathrooms === 0 ? "active-bathrooms" : "default-bathrooms"}`}>Any</span>
                                <span onClick={() => handleBathrooms(1)} className={`${bathrooms === 1 ? "active-bathrooms" : "default-bathrooms"}`}>1</span>
                                <span onClick={() => handleBathrooms(2)} className={`${bathrooms === 2 ? "active-bathrooms" : "default-bathrooms"}`}>2</span>
                                <span onClick={() => handleBathrooms(3)} className={`${bathrooms === 3 ? "active-bathrooms" : "default-bathrooms"}`}>3</span>
                                <span onClick={() => handleBathrooms(4)} className={`${bathrooms === 4 ? "active-bathrooms" : "default-bathrooms"}`}>4</span>
                                <span onClick={() => handleBathrooms(5)} className={`${bathrooms === 5 ? "active-bathrooms" : "default-bathrooms"}`}>5</span>
                                <span onClick={() => handleBathrooms(6)} className={`${bathrooms === 6 ? "active-bathrooms" : "default-bathrooms"}`}>6</span>
                                <span onClick={() => handleBathrooms(7)} className={`${bathrooms === 7 ? "active-bathrooms" : "default-bathrooms"}`}>7</span>
                                <span onClick={() => handleBathrooms(8)} className={`${bathrooms === 8 ? "active-bathrooms" : "default-bathrooms"}`}>8+</span>
                            </div>
                        </div>
                    </div>

                    {/* property filter */}
                    <div className='property-filter'>
                        <h3 className='property-title'>Property type</h3>
                        <div className='property-container'>
                            <div onClick={() => handlePropertyType('Home')} className={`property-type ${propertyType.includes("Home") ? "active" : ""}`}>
                                <AiOutlineHome size={32} />
                                <h3 className="property-name">Home</h3>
                            </div>

                            <div onClick={() => handlePropertyType('Apartment')} className={`property-type ${propertyType.includes("Apartment") ? "active" : ""}`}>
                                <BiSolidCity size={32} />
                                <h3 className="property-name">Apartment</h3>
                            </div>

                            <div onClick={() => handlePropertyType('Guesthouse')} className={`property-type ${propertyType.includes("Guesthouse") ? "active" : ""}`}>
                                <PiWarehouse size={32} />
                                <h3 className="property-name">GuestHouse</h3>
                            </div>

                            <div onClick={() => handlePropertyType('Hotel')} className={`property-type ${propertyType.includes("Hotel") ? "active" : ""}`}>
                                <RiHotelLine size={32} />
                                <h3 className="property-name">Hotel</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal footer */}
                <div className="modal-footer">
                    <button onClick={handleClearAll} className="clear-btn">
                        Clear All
                    </button>
                    <button onClick={handleShowPlace} type="button" className="show-btn">Show {filteredRoom.length} Places</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;