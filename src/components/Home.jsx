
import { useContext, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './home.css'
import { AllRoomsContext } from './RoomProvider';

const Home = () => {
    const { rooms } = useContext(AllRoomsContext)
    const [showAllData, setShowAllData] = useState(false)

    return (
        <>

            <Header />
            <main>
                <div className="card-container">

                    {
                        showAllData ? rooms?.map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />)) : rooms?.slice(0, 20).map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />))

                    }


                </div>
                {showAllData === false && <button onClick={() => setShowAllData(true)} className='showmore-button'>Show more</button>}
            </main>
            <Footer />
        </>
    );
};

export default Home;