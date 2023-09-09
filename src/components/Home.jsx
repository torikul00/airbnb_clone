
import { useContext, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './home.css'
import { AllRoomsContext } from './RoomProvider';
import { useLocation } from 'react-router-dom';
import Loader from './Loader/Loader';

const Home = () => {
    const { rooms, allRooms, loading } = useContext(AllRoomsContext)
    const [showAllData, setShowAllData] = useState(false)


    return (
        <>
            {loading ? <Loader /> : <>


                <Header />


                <main>

                    <div className='card-main-container'>
                        <div className="card-container">



                            {
                                showAllData ? rooms?.map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />)) : rooms?.slice(0, 20).map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />))

                            }


                        </div>

                        {rooms.length > 20 && allRooms.length > 20 && showAllData === false ? <button onClick={() => setShowAllData(true)} className='showmore-button'>Show more</button> : ''}
                    </div>

                </main >
                <Footer />



            </>}


        </>
    );
};

export default Home;