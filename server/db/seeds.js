use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        id: 1,
        guestName: "Daffy",
        guestEmail: "Daffy@duck.net",
        checkedIn : false
    },
    {
        id: 2,
        guestName: "Mickey",
        guestEmail: "Micky@mouse.net",
        checkedIn : true
    },
    {
        id: 3,
        guestName: "Piggy",
        guestEmail: "Piggy@mrs.net",
        checkedIn : false
    }
]);

