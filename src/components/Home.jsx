
import { useContext, useState } from 'react';
import Card from './Card/Card';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import './home.css'
import { AllRoomsContext } from './RoomProvider';

const Home = () => {
    const {rooms} = useContext(AllRoomsContext)
 


    return (
        <>

            <Header />
            <main>
                <div className="card-container">
                    {rooms?.map(singleRoom => (<Card singleRoom={singleRoom} key={singleRoom._id} />))}

                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;