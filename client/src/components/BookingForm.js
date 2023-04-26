import React, {useState} from 'react';

const BookingForm = ( {onGuestBookinSubmit} ) => {

    const [guestName, setGuestName] = useState("");
    const [guestEmail, setGuestEmail] = useState("");
    const [guestCheckedIn, setGuestCheckedIn] = useState(false)

    const handleGuestNameChange = (e) => {
        // console.log(e.target.value)
        setGuestName(e.target.value)
    }

    const handleGuestEmailChange = (e) => {
        setGuestEmail(e.target.value)
    }

    const handleGuestCheckedInChange = (e) => {
        setGuestCheckedIn(!guestCheckedIn)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        const newGuestDetails = {
            guestName: guestName,
            guestEmail: guestEmail,
            guestCheckedIn: guestCheckedIn
        }
        console.log(`The new guest details... name: ${newGuestDetails.newGuestName}; email: ${newGuestDetails.newGuestEmail} and ${newGuestDetails.newGuestCheckedIn ? "is" : "is not"} checked in`)
        onGuestBookinSubmit(newGuestDetails)
        setGuestName("")
        setGuestEmail("")
        setGuestCheckedIn(false)
    }
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const guestNameValue = guestName.trim()
    //     const guestEmailValue = guestEmail.trim()
    //     const guestCheckedInValue = guestCheckedIn

    //     if (!guestNameValue || !guestEmailValue) return // Return and do nothing if no valid input
    //     // Update comments in CommentBox
    //     onGuestBookinSubmit({
    //         guestName: guestNameValue,
    //         guestEmail: guestEmailValue,
    //         checkedIn: guestCheckedInValue
    //     })
    //     // Clear the inputs
    //     setGuestName('')
    //     setGuestEmail('')
    //     setGuestCheckedIn(false)
    // }




    return (
        <>
            <h3>Booking form</h3>
            <form onSubmit = {handleSubmit}>
                <input type = "guestName" placeholder = "Guest Name" value = {guestName} onChange = {handleGuestNameChange}></input>
                <input type = "email" placeholder = "Guest Email" value = {guestEmail} onChange = {handleGuestEmailChange}></input>
                <input type="checkbox" id="checkbox" name = "checkbox" checked= {guestCheckedIn} onChange = {handleGuestCheckedInChange} />
                <label htmlFor="checkbox"> Checked in? </label>
                <button>Submit</button>
            </form>
            {/* <form onSubmit = {handleSubmit} >
                <input type = "name" placeholder = "Guest Name" value = {guestName} onChange = {handleGuestNameChange}/>
                <input type = "email" placeholder = "Guest Email" value = {guestEmail} onChange = {handleEmailChange}/>
                <input type="checkbox" id="checkedIn" name="checkedIn" value={guestCheckedIn} onChange = {handleGuestCheckedin}/>
                <button>Submit</button>
            </form> */}

        </>
    )
}


export default BookingForm