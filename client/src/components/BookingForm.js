import React, {useState} from 'react';

const BookingForm = ( {onGuestBookinSubmit} ) => {

    const [newGuestName, setNewGuestName] = useState("");
    const [newGuestEmail, setNewGuestEmail] = useState("");
    const [newGuestCheckedIn, setNewGuestCheckedIn] = useState(false)

    const handleGuestNameChange = (e) => {
        // console.log(e.target.value)
        setNewGuestName(e.target.value)
    }

    const handleGuestEmailChange = (e) => {
        setNewGuestEmail(e.target.value)
    }

    const handleGuestCheckedInChange = (e) => {
        setNewGuestCheckedIn(!newGuestCheckedIn)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        const newGuestDetails = {
            guestName: newGuestName,
            guestEmail: newGuestEmail,
            guestCheckedIn: newGuestCheckedIn
        }
        console.log(`The new guest details... name: ${newGuestDetails.guestName}; email: ${newGuestDetails.guestEmail} and ${newGuestDetails.guestCheckedIn ? "is" : "is not"} checked in`)
        onGuestBookinSubmit(newGuestDetails)
        setNewGuestName("")
        setNewGuestEmail("")
        setNewGuestCheckedIn(false)
    }

    return (
        <>
            <h3>Booking form</h3>
            <form onSubmit = {handleSubmit}>
                <input type = "guestName" placeholder = "Guest Name" value = {newGuestName} onChange = {handleGuestNameChange}></input>
                <input type = "email" placeholder = "Guest Email" value = {newGuestEmail} onChange = {handleGuestEmailChange}></input>
                <input type="checkbox" id="checkbox" name = "checkbox" checked= {newGuestCheckedIn} onChange = {handleGuestCheckedInChange} />
                <label htmlFor="checkbox"> Checked in? </label>
                <button>Submit</button>
            </form>


        </>
    )
}


export default BookingForm