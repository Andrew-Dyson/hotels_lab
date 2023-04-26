import Booking from "./Booking"

const BookingsGrid = ( { bookings, manageCheckinStatusChange }) => {


    const renderBookings = bookings.map(bk => {
        return(
            <Booking key = {bk._id} booking = {bk} manageCheckinStatusChange={manageCheckinStatusChange}/>
        )
    })

    return (
        <>

            <h3>Booking grid</h3>
            <p> There are {bookings.length} bookings</p>
            {renderBookings}
        </>
    )
}


export default BookingsGrid
