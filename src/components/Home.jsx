
import { useContext, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './home.css'
import { AllRoomsContext } from './RoomProvider';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const { rooms } = useContext(AllRoomsContext)
    const [showAllData, setShowAllData] = useState(false)
    const location = useLocation();
    const categoryType = new URLSearchParams(location.search).get('category');
    return (
        <>

            <Header />
            <main>
                <div className="card-container">

                    {
                        showAllData ? rooms?.map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />)) : rooms?.slice(0, 20).map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />))

                    }


                </div>
                {showAllData === false && !categoryType ? <button onClick={() => setShowAllData(true)} className='showmore-button'>Show more</button>:''}
            </main>
            <Footer />
        </>
    );
};

export default Home;