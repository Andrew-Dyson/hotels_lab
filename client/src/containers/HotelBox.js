import React, {useState, useEffect} from 'react'

import BookingsGrid from "../components/BookingsGrid"
import BookingForm from "../components/BookingForm"
import { getBookings, postBooking} from "../BookingsService"

// These are seed data from the client side. 
// Once the database is set up these will be removed
// const seedDataClient = [
//     {
//         id: 1,
//         guestName: "Daffy",
//         guestEmail: "Daffy@duck.net",
//         checkedIn : false
//     },
//     {
//         id: 2,
//         guestName: "Mickey",
//         guestEmail: "Micky@mouse.net",
//         checkedIn : true
//     },
//     {
//         id: 3,
//         guestName: "Piggy",
//         guestEmail: "Piggy@mrs.net",
//         checkedIn : false
//     }
// ]

const HotelBox = () => {

    const [bookings, setBookings] = useState(null)

    useEffect( () => {
        getBookings()
        .then((data) => {
            console.log("use effect triggered")
            setBookings(data)
        })
    }, [] )

    const handleNewBooking = (newGuest) => {
        console.log("handleNewBooking triggered")
       
    }


return (
    <>
    <h2> This is a hotelbox </h2>
    {bookings && <BookingForm onGuestBookinSubmit={handleNewBooking}/> }
    {bookings && <BookingsGrid bookings={bookings}/>}
    </> 
)

}


export default HotelBox