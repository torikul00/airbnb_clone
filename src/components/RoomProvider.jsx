import { createContext, useEffect, useState } from 'react';

export const RoomsContext = createContext(null)

const RoomsProvider = ({ children }) => {
    const [showSearchQuery, setShowSearchQuery] = useState(false)
    const [loading, setLoading] = useState(true)
    const [allCategoryRooms, setAllCategoryRooms] = useState([])
    const [rooms, setRooms] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allRooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data)
                setAllCategoryRooms(data)
                setLoading(false)
            })
    }, [])
    const roomsData = {
        loading,
        setRooms,
        allCategoryRooms,
        rooms,
        showSearchQuery,
        setShowSearchQuery
    }
    return (
        <RoomsContext.Provider value={roomsData}>
            {children}
        </RoomsContext.Provider>
    );
};

export default RoomsProvider;