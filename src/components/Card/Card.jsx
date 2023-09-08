import { useContext } from 'react';
import './card.css'
import { AiFillStar } from 'react-icons/ai'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { format, parse } from 'date-fns';
import { AllRoomsContext } from '../RoomProvider';
const Card = ({ singleRoom }) => {

    const { location, image, rating, price, dateRange, propertyType } = singleRoom;
    const { showTotal } = useContext(AllRoomsContext)

    let startDate = dateRange.split(' - ')[0]
    let endDate = dateRange.split(' - ')[1]

    startDate = parse(startDate, 'MMM d, yyyy', new Date())
    endDate = parse(endDate, 'MMM d, yyyy', new Date())

    const difTime = startDate.getTime() - endDate.getTime()
    const difNight = difTime / (1000 * 3600 * 24)
    const night = Math.abs(difNight)
    const totalPrice = price * night;


    startDate = format(startDate, 'MMM d')
    endDate = format(endDate, 'MMM d')

    return (
        <>
            <div className='card-wrapper'>
                <div className='heart'><BsFillSuitHeartFill /></div>
                <div className="card">
                    <img width='100%' height='285px' src={image} alt="" />
                    <div className='card-title'>
                        <h2>{location}</h2>
                        <div className='rating'> <AiFillStar className='rating-icon' />{rating}</div>
                    </div>
                    <p className='card-desc'>{propertyType} </p>
                    <p className='card-desc'>{startDate} , {endDate}</p>
                    <p className='card-price'>{showTotal ? <strong> ${totalPrice} Total</strong> : <strong>{`$${price} Night`}</strong>}</p>

                </div>

            </div>

        </>
    );
};

export default Card;