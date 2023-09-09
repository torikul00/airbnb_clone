import { createContext, useEffect, useState } from 'react';

export const AllRoomsContext = createContext(null)

const RoomsProvider = ({ children }) => {
    const [showSearchQuery, setShowSearchQuery] = useState(false)
    const [loading, setLoading] = useState(true)
    const [allRooms, setAllRooms] = useState([])
    const [rooms, setRooms] = useState([])
    const [showTotal, setShowTotal] = useState(false)

    useEffect(() => {

        fetch('https://airbnb-server-jade.vercel.app/allRooms')
            .then(res => res.json())
            .then(roomsData => {
                setRooms(roomsData)
                setAllRooms(roomsData)
                setLoading(false)
            })
    }, [])
    const roomsData = {
        loading,
        setRooms,
        allRooms,
        rooms,
        showSearchQuery,
        setShowSearchQuery,
        setShowTotal,
        showTotal
    }
    return (
        <AllRoomsContext.Provider value={roomsData}>
            {children}
        </AllRoomsContext.Provider>
    );
};

export default RoomsProvider;