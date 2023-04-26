import React, {useState, useEffect} from 'react'

import BookingsGrid from "../components/BookingsGrid"
import BookingForm from "../components/BookingForm"
import { getBookings, postBooking} from "../BookingsService"


const HotelBox = () => {

    const [bookings, setBookings] = useState([])

    useEffect( () => {
        getBookings()
        .then((data) => {
            console.log("use effect triggered")
            setBookings(data)
        })
    }, [] )

    const handleNewBooking = (newGuest) => {
        console.log("handleNewBooking triggered")

        postBooking(newGuest).then((data) => {
            let temp = bookings.map(b => b);
            temp.push(data);
            setBookings(temp);
        })       
    }


return (
    <>
    <h2> This is a hotelbox </h2>
    {bookings.length >= 1 && <BookingForm onGuestBookinSubmit={handleNewBooking}/> }
    {bookings.length >= 1 && <BookingsGrid bookings={bookings}/>}
    </> 
)

}


export default HotelBox