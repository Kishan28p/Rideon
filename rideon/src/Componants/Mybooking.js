import React from 'react'
import '../Componants/Mybooking.css'


function Mybooking() {
    const user=JSON.parse(localStorage.getItem('user')) ||{};
    const bookings=JSON.parse(localStorage.getItem('bookings'))||[];

    const userBookings = bookings.filter(
        (booking)=> booking.userEmail === user.email
    )
    if (!bookings){
        return <p>No booing found</p>
    }
  return (
    <>
    <div className="booking-container">
        
        {userBookings.map((booking,index)=>(
            <div className='bookingcard' key={index}>
                <p><strong>Name:</strong> {booking.userName}</p>
                <p><strong>Phone:</strong> {booking.phone}</p>
                <p><strong>Bike:</strong> {booking.bike}</p>
                <p><strong>Price:</strong> {booking.price}</p>
                <p><strong>Security:</strong> {booking.security}</p>
                <p><strong>Location:</strong> {booking.location}</p>
                
                <p><strong>Start Date:</strong> {new Date(booking.startDate).toLocaleDateString()}</p>
                <p><strong>End Date:</strong> {new Date(booking.endDate).toLocaleDateString()}</p>
                
            
            </div>
                  
      
        ))}
          
    </div>
    </>
  )
}

export default Mybooking