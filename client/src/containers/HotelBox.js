import React, {useState, useEffect} from 'react'

import BookingsGrid from "../components/BookingsGrid"
import BookingForm from "../components/BookingForm"
import { getBookings, postBooking, updateBooking, deleteBooking} from "../BookingsService"


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

    const manageDelete = (id) => {
        console.log(`manageDelete triggered with id ${id}`)
        deleteBooking(id)

        const newBookings = bookings.filter(b => b._id != id)
        setBookings(newBookings)
    }
    


return (
    <>
    <h2> This is a hotelbox </h2>
    {bookings.length >= 1 && <BookingForm onGuestBookinSubmit={handleNewBooking}/> }
    {bookings.length >= 1 && <BookingsGrid bookings={bookings} manageCheckinStatusChange={manageCheckinStatusChange} manageDelete = {manageDelete} />}
    </> 
)

}


export default HotelBox