
const Booking = ({booking, manageCheckinStatusChange, manageDelete}) => {

    const handleCheckinClick = () => {
        console.log(`handleCheckinClick detected on id ${booking._id}`)
        const payload = {
            checkedIn: !booking.checkedIn
        }     
        console.log(payload)
        manageCheckinStatusChange(booking._id, payload)

    }

    const handleDeleteClick = () => {
        console.log(`handleDeleteClick detected on id ${booking._id}`)
        manageDelete(booking._id)
    }

    return (
        <>
        <ul>
            <li>Name: {booking.guestName}</li>
            <li>Email: {booking.guestEmail}</li>
            <li onClick = {handleCheckinClick}>Checked in: {booking.checkedIn ? 'yes' : 'no'}</li>
            <li onClick = {handleDeleteClick}><b>DELETE</b></li>
        </ul>
        </>
    )
}


export default Booking