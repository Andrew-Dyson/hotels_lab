import React, {useState, useEffect} from 'react'

import BookingsGrid from "../components/BookingsGrid"
import BookingForm from "../components/BookingForm"


// These are seed data from the client side. 
// Once the database is set up these will be removed
const seedDataClient = [
    {
        id: 1,
        guestName: "Daffy",
        guestEmail: "Daffy@duck.net",
        checkedIn : false
    },
    {
        id: 2,
        guestName: "Mickey",
        guestEmail: "Micky@mouse.net",
        checkedIn : true
    },
    {
        id: 3,
        guestName: "Piggy",
        guestEmail: "Piggy@mrs.net",
        checkedIn : false
    }
]

const HotelBox = () => {

    const [bookings, setBookings] = useState(null)

    useEffect( () => {
        // Initally load client-side seed data 
        // Later change so these are taken from the database

        setBookings(seedDataClient)
    }, [] )

    const handleNewBooking = (newGuest) => {
        console.log("handleNewBooking triggered")
        // const maxId = Math.max(...(bookings.map(o => o.id)), 0);
        // console.log(`The maximum id in the existing array is ${maxId}`)
        // console.log(newGuest)
        // newGuest.id = maxId + 1
        setBookings(
            ...bookings,
            newGuest
        )
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