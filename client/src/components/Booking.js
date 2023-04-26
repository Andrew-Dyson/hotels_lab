
const Booking = ({booking}) => {

    return (
        <>
        <ul>
            <li>Name: {booking.guestName}</li>
            <li>Email: {booking.guestEmail}</li>
            <li>Checked in: {booking.checkedIn ? 'yes' : 'no'}</li>
        </ul>
        </>
    )
}


export default Booking