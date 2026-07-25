import React from 'react'
import '../Componants/Home.css';
import Img from '../Images/re.png'
import duke from '../Images/duke.png'
import activa from '../Images/activa.png'
import pulzer from '../Images/pulzer.png'
import { Link } from 'react-router-dom';


function Home() {


  return (
    <>
    <div className='container'>
        
        <article className='article-section'>
            <h2>Rent • Ride • Repeat</h2>
            <p>Flexible bike rentals starting at just <span style={{color:'black',fontWeight:'bold'}}> ₹200/day.</span></p>
            <button className='booking-btn'><Link to='/bikes'>Book Now</Link></button>
        </article>
        
    </div>
    <div className='banner-section'>
        <h1>RIDE ON</h1>

            <div className='empty-box'></div>
            <img className='banner-img' src={Img} alt="" />
        </div>
        


    <div className="card-container">
      {/* Card 1 */}
      <div className="card">
        <img src={duke} alt="duke" />
        <h3>Super Bikes</h3>
        <p>High-speed superbike, perfect for thrill rides.</p>
        
      </div>

      {/* Card 2 */}
      <div className="card">
        <img src={pulzer} alt="pulzer" />
        <h3>Bikes</h3>
        <p>Perfect for city rides with great mileage.</p>
        
      </div>

      {/* Card 3 */}
      <div className="card">
        <img src={activa} alt="activa" />
        <h3>Scooters</h3>
        <p>Reliable and budget-friendly commuter bike.</p>
        
      </div>
    </div>
    <div className='bottom-section'>
      <h2>Start your ride now!</h2>
      <button className='booking-btn'><Link to='/bikes'>Book Now</Link></button>
    </div>

    <div className='footer-section'>
      <h2>RideON</h2>
      <div className='footer-links'>
        <a href="#5">About Us</a>
        <a href="#6">Terms & Conditions</a>
        <a href="#7">Privacy Policy</a>
        <a href="#8">FAQs</a>
      </div>
      <p>Copyright @2025 All rights reserved.</p>
    </div>
    
    </>
    
  )
}

export default Home