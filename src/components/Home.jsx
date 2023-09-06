
import Card from './Card/Card';
import Header from './Header/Header';
import './home.css'

const Home = () => {
    const arr = [1,2,3,4,5,6,7,8]
    return (
        <>
       <Header />
           <main>
            <div className="card-container">
                {arr.map (item =>(<Card  />))}
                
            </div>
           </main>
        </>
    );
};

export default Home;