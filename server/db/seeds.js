use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        guestName: "Daffy",
        guestEmail: "Daffy@duck.net",
        checkedIn : false
    },
    {
        guestName: "Mickey",
        guestEmail: "Micky@mouse.net",
        checkedIn : true
    },
    {
        guestName: "Piggy",
        guestEmail: "Piggy@mrs.net",
        checkedIn : false
    }
]);

