import React from 'react';
import './footer.css'
import { RiGlobalLine } from 'react-icons/ri'
import { AiFillFacebook ,AiFillInstagram} from 'react-icons/ai'
import { FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            <h3 className='footer-title'>Inspiration for future getaways</h3>
            <div className="footer-category-container">
                <a href="">Popular</a>
                <a href="">Arts & culture</a>
                <a href="">Outdoors</a>
                <a href="">Mountains</a>
                <a href="">Unique stays</a>
                <a href="">Categories</a>
                <a href="">Things to do</a>
                <a href="">Airbnb-friendly apartments</a>
            </div>
            <hr className='footer-divider1' />
            <div className="footer-city-container">
                <div className='city-container'>
                    <div>
                        <p className="city-name">Canmore</p>
                        <p className="rental-type">Condo rentals</p>
                    </div>
                    <div className='city'>
                        <p className="city-name">Tucson</p>
                        <p className="rental-type">Mansion rentals</p>
                    </div>
                    <div>
                        <p className="city-name">Anaheim</p>
                        <p className="rental-type">Vacation rentals</p>
                    </div>
                </div>
                <div>
                    <div className='city-container'>
                        <div>
                            <p className="city-name">Benalmádena</p>
                            <p className="rental-type">Apartment rentals</p>
                        </div>
                        <div className='city'>
                            <p className="city-name">Jasper</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                        <div>
                            <p className="city-name">Monterey</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='city-container'>
                        <div>
                            <p className="city-name">Marbella</p>
                            <p className="rental-type">Beach house rentals</p>
                        </div>
                        <div className='city'>
                            <p className="city-name">Mountain view</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                        <div>
                            <p className="city-name">Paso Robles</p>
                            <p className="rental-type">House rentals</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='city-container'>
                        <div>
                            <p className="city-name">Mijas</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                        <div className='city'>
                            <p className="city-name">Devonport</p>
                            <p className="rental-type">Cottage rentals</p>
                        </div>
                        <div>
                            <p className="city-name">Santa Barbara</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='city-container'>
                        <div>
                            <p className="city-name">Prescott</p>
                            <p className="rental-type">Cabin rentals</p>
                        </div>
                        <div className='city'>
                            <p className="city-name">Mallacoota</p>
                            <p className="rental-type">Beach house rentals</p>
                        </div>
                        <div>
                            <p className="city-name">Sonoma</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='city-container'>
                        <div>
                            <p className="city-name">Scottsdale</p>
                            <p className="rental-type">Mansion rentals</p>
                        </div>
                        <div className='city'>
                            <p className="city-name">Ibiza</p>
                            <p className="rental-type">Apartment rentals</p>
                        </div>
                        <div>
                            <p className="city-name">Sonoma</p>
                            <p className="rental-type">Vacation rentals</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='footer-divider1' />
            <div className="footer-links-container">
                <div className='links'>
                    <p className='link-title'>Support</p>
                    <a href="">Help Center</a>
                    <a href="">AirCover</a>
                    <a href="">Anti-discrimination</a>
                    <a href="">Disability support</a>
                    <a href="">Cancellation options</a>
                    <a href="">Report neighborhood concern</a>
                </div>
                <div>
                    <div className='links'>
                    <p className='link-title'>Hosting</p>
                    <a href="">Airbnb your home</a>
                    <a href="">AirCover for Hosts</a>
                    <a href="">Hosting resources</a>
                    <a href="">Community forum</a>
                    <a href="">Hosting responsibly</a>
                    <a href="">Airbnb-friendly apartments</a>
                </div>
                </div>
                <div>  <div className='links'>
                    <p className='link-title'>Airbnb</p>
                    <a href="">Newsroom</a>
                    <a href="">New features</a>
                    <a href="">Careers</a>
                    <a href="">Investors</a>
                    <a href="">Gift cards</a>
                    <a href="">Airbnb.org emergency stays</a>
                </div></div>
            </div>
            <hr className='footer-divider1' />
            <div className="footer-bottom-container">
            <div className="footer-bottom-left">
                <p className='copyright'>© 2023 Airbnb, Inc.</p>
                <a href="">Terms</a>
                <p>.</p>
                <a href="">Sitemap</a>
                <p>.</p>
                <a href="">Privacy</a>
                <p>.</p>
                <a href="">Your Privacy Choices</a>
            </div>
            <div className="footer-bottom-right">
              <div className="right-links">
              <div className='eng'><RiGlobalLine className='gicon'  /><a href="">English(US)</a></div> 
              <p className='dollar'> $ </p>
                <a className='usd' href="">USD</a>
                <div className='socials'>
                    <AiFillFacebook  className='social-icon'/>
                    <FaTwitterSquare className='social-icon' />
                    <AiFillInstagram  className='social-icon'/>
                    
                </div>
              </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;