import React from 'react';
import './card.css'
import {AiFillStar} from 'react-icons/ai'
import {BsFillSuitHeartFill} from 'react-icons/bs'
const Card = () => {
    return (
        <>
        <div className='card-wrapper'>
            <div className='heart'><BsFillSuitHeartFill /></div>
            <div className="card">
                <img width='100%' src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720" alt="" />
              <div className='card-title'>
              <h2>London, UK</h2>
              <div className='rating'> <AiFillStar className='rating-icon' /> 4.54</div>
              </div>
                <p className='card-desc'>Stay with amelia . Hosting for 5 years </p>
                <p className='card-desc'>oct1-6</p>
                <p className='card-price'><strong>$72</strong> night</p>

            </div>

        </div>
        
        </>
    );
};

export default Card;