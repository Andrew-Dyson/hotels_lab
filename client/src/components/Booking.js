
const Booking = ({booking, manageCheckinStatusChange}) => {

    const handleCheckinClick = () => {
        console.log(`handleCheckinClick detected on id ${booking._id}`)
        const payload = {
            checkedIn: !booking.checkedIn
        }     
        console.log(payload)
        manageCheckinStatusChange(booking._id, payload)

    }

    return (
        <>
        <ul>
            <li>Name: {booking.guestName}</li>
            <li>Email: {booking.guestEmail}</li>
            <li onClick = {handleCheckinClick}>Checked in: {booking.checkedIn ? 'yes' : 'no'}</li>
        </ul>
        </>
    )
}


export default Booking