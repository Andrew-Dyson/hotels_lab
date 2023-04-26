import React, {useState, useEffect} from 'react'

import BookingsGrid from "../components/BookingsGrid"
import BookingForm from "../components/BookingForm"
import { getBookings, postBooking, updateBooking} from "../BookingsService"


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

    const manageCheckinStatusChange = (id, payload) => {
        updateBooking(
            id,
            payload
        )

        const revisedBookings = bookings.map(booking => {
            if (booking._id === id) {
                booking.checkedIn = !booking.checkedIn
                return booking
            } else {
                return booking
            }
        })

        console.log(revisedBookings)
    
        setBookings(revisedBookings)
        

    }
    


return (
    <>
    <h2> This is a hotelbox </h2>
    {bookings.length >= 1 && <BookingForm onGuestBookinSubmit={handleNewBooking}/> }
    {bookings.length >= 1 && <BookingsGrid bookings={bookings} manageCheckinStatusChange={manageCheckinStatusChange}/>}
    </> 
)

}


export default HotelBox