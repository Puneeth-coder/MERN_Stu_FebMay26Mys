//handles booking related operation

const bookingEmitter = require("./events");

let currentBooking = null;

function getCurrentbooking() {
    return currentBooking;
}

function clearCurrentbooking() {
    currentBooking = null;
}

function checkDuplicateBooking(movie, showtime, seatCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (
                currentBooking &&
                currentBooking.movieId === movie.id &&
                currentBooking.time === showtime.time &&
                currentBooking.seatCount === seatCount
            ) {
                return reject("Duplicate booking detected. Ticket already booked")
            }
            resolve("No duplicate booking found.");
        }, 300);
    });
}

function checkSeatsAvailability(showtime, seatCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showtime.seatsAvailable < seatCount) {
                return reject(`Only ${showtime.seatsAvailable} seat(s) are available.`)
            }
            resolve("Seats are available");
        }, 300);
    });
}

function generateBookingDetails(movie, showtime, seatCount) {
    return new Promise((resolve) =>{
        setTimeout(()=> {
        const booking = {
            bookingId: `BOOK-${Date.now()}`,
            movieId: movie.id,
            movieTitle: movie.title,
            time: showtime.time,
            seatCount
        };
        resolve(booking);
    }, 300);
});

}

function conformBooking(booking, showtime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            showtime.seatsAvailable = booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("bookingConfirmed", booking);
            resolve(booking);
        }, 300);
    });
}

//promise chaining
function processBooking(movie,showtime,seatCount){
    bookingEmitter.emit("bookingStarted");

    return checkDuplicateBooking(movie,showtime,seatCount)
            .then(()=>{
                bookingEmitter.emit("bookingValidated");
                return checkSeatsAvailability(showtime,seatCount);
            })
            .then(()=>generateBookingDetails(movie,showtime,seatCount))
            .then((booking)=>conformBooking(booking,showtime))
            .catch((error)=>{
                bookingEmitter.emit("bookingfailed",error);
                throw error;
            });
}

//async/await

async function processBookingAsync(movie,showtime,seatCount){
    try{
        bookingEmitter.emit("bookingStarted");
        await checkDuplicateBooking(showtime,seatCount);
        bookingEmitter.emit("bookingValidate");

        await checkSeatsAvailability(showtime,seatCount);

        const booking = await generateBookingDetails(movie,showtime,seatCount);

        const conformedBooking = await conformBooking(booking,showtime);

        return conformedBooking;
    }
    catch(error){
        bookingEmitter.emit("bookingfailed",error);
        throw error;
    }

}

module.exports = {
    getCurrentbooking,
    clearCurrentbooking,
    processBooking,
    processBookingAsync
};