const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => {
      return {
        ...data,
        ...payload
      }
    })
}

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

// add update booking
export const updateBooking = (id, payload) => {
    console.log("updateBooking triggered")
    console.log(`id: ${id}`)
    console.log(`payload: ${payload} and it contains ${payload.checkedIn}`)
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      return {
        ...data, // { _id: <> }
        ...payload // { name: <> }
      }
    })
}
