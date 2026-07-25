import React, { useState } from 'react'
import duke from "../Images/duke.png";
import pulzer from "../Images/pulzer.png";
import activa from "../Images/activa.png";
import enfield from "../Images/enfield.png";
import splendor from "../Images/splen.png";
import dio from "../Images/dio1.jpg";
import '../Componants/Bikes.css'
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Bikes() {
    const [selectedBike, setSelectedBike]=useState(null);
    const locations=['Kasaragod','Kannur','Kochi'];
    const[location,setLocation]=useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    const confirmBooking=()=>{
        if(!location || !startDate || !endDate){
            alert('please fill the details');
            return;
        }
        const user=JSON.parse(localStorage.getItem('user'))|| {};

        const booking={
            bike : selectedBike.title,
            price : selectedBike.price,
            security: selectedBike.security,
            location,
            startDate : startDate,
            endDate : startDate,
            phone : user.phone || "",
            userName: user.full_name || "",
            userEmail : user.email || "",
        };
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];
        existingBookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        alert("Booking Confirmed!");
        navigate('/mybooking')
        setSelectedBike(null);
        
    }

    const navigate=useNavigate();

    const handleBooking=(bike)=>{
        const token=localStorage.getItem('access_token');
        if(!token){
            navigate('/login');
        }else{
            setSelectedBike(bike)
        }
    }

    const bikes = [
        {
            id:1,
            img: duke,
            title:"KTM duke 390",
            price:'₹500/day',
            security:'₹2000',
            maxkm:'100'
            
        },
        {
            id:2,
            img: pulzer,
            title:"Pulzer 125",
            price:'₹300/day',
            security:'₹2000',
            maxkm:'100'

        },
        {
            id:3,
            img: activa,
            title:"Honda Activa 5G",
            price:'₹150/day',
            security:'₹2000',
            maxkm:'100'

        },
        {
            id:4,
            img: enfield,
            title:"Royal Enfield Classic 350 ",
            price:'₹700/day',
            security:'₹2000',
            maxkm:'100'

        },
        {
            id:5,
            img: splendor,
            title:"Hero Splendor+",
            price:'₹250/day',
            security:'₹2000',
            maxkm:'100'

        },
        {
            id:6,
            img: dio,
            title:"Honda Dio 125",
            price:'₹150/day',
            security:'₹2000',
            maxkm:'100'


        }
    ]

  return (
    <>
    {selectedBike && (
                        <div className='floating-bike-container'>
                            <div className='bike-box'>
                                <button className='close-btn' onClick={()=>{setSelectedBike(false)}}>
                                    X
                                </button>
                                
                                <h5>{selectedBike.title}</h5>
                                <p>Price : <span style={{fontWeight:'bold',paddingTop:'30px'}}>{selectedBike.price}</span></p>
                                <p>Seurity Deposite : {selectedBike.security}</p>
                                <p>Max km : {selectedBike.maxkm}</p>
                                <div className='input-container'>
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        style={{ marginLeft: "10px", padding: "5px" }}
                                    >
                                        <option value="">Location</option>
                                        {locations.map((loc, idx) => (
                                        <option key={idx} value={loc}>
                                            {loc}
                                        </option>
                                        
                                        ))}
                                    </select>
                                     <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Start Date"
                                    />

                                    
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        placeholderText="End Date"
                                    />
                                </div>
                                
                                <button className='booking-btn' id='confirm-btn' onClick={confirmBooking}>Confirm Booking</button>
                                

                            </div>
                        </div>
                    )}
    <div className="bike-container">
        
        {bikes.map((bike)=>(
            <div className='bike-card' key={bike.id}>
                <img src={bike.img} alt={bike.title} />
                <h3>{bike.title}</h3>
                <p>{bike.price}</p>
                <p>Security Deposite : {bike.security}</p>
                <button onClick={()=>handleBooking(bike)}>Book Now</button>
                
            </div>
        ))}
          
    </div>
    </>
  )
}

export default Bikes