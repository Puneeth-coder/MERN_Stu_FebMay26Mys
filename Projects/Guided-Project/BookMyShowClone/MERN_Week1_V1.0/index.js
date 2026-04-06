const readline = require("readline");
const chalk = require("chalk");

const movies = require("./movies");
const bookingEmitter = require("./events");
const { validateMovieSelection, validateTimeSelection, validateSeatCount } = require("./validator");
const {
    getCurrentbooking,
    processBookingAsync
} = require("./booking");
const { cancelBooking } = require("./cancel");
const { log, time } = require("console");

const MAX_ATTEMPTS = 3;
let InvalidAttempts = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Event Listeners 
bookingEmitter.on("bookingStated", () => {
    console.log(chalk.blue("Booking process started."));

});

bookingEmitter.on("bookingValidated", () => {
    console.log(chalk.cyan("Booking validated successfully."));

});

bookingEmitter.on("bookingConfirmed", (booking) => {
    console.log(chalk.green("\nBooking Confirmed."));
    console.log(chalk.green(`Booking Id: ${booking.bookingId}`));
});
bookingEmitter.on("bookingCancel", (booking) => {
    console.log(chalk.yellow(`Booking Cancelled for Id: ${booking.movieTitle} at ${booking.time}`));

});
bookingEmitter.on("bookingFailed", (error) => {
    console.log(chalk.red(`Booking Failed : ${error}`));

});

//helper function

function displayMovies() {
    console.log(chalk.magenta("\nAvailable Movies"));
    movies.forEach((movie) => {
        console.log(chalk.bold(`\n${movie.id}.${movie.title}`));
        movie.showTimes.forEach((show) => {
            console.log(`-${show.time} | Seats Available:${show.seatsAvailable}`);
        });

    });
}

function handleInvalidAttempt(message) {
    InvalidAttempts++;
    console.log(chalk.red(`\n${message}`));
    console.log(chalk.yellow(`Attempts left:${MAX_ATTEMPTS - InvalidAttempts}`));

    if (InvalidAttempts >= MAX_ATTEMPTS) {
        console.log(chalk.red("\nMAX invalid attempts reached.Exiting app"));
        r1.close();
        return true;
    }
    return false;
}

function viewCurrentBooking() {
    const booking = getCurrentbooking();
    if (!booking) {
        console.log(chalk.yellow("\n no booking found"));
        return;
    }
    console.log(chalk.green("Booking details"));
    console.log(`Booking id: ${booking.bookingId}`);
    console.log(`Movie: ${booking.movieTitle}`);
    console.log(`Time: ${booking.time}`);
    console.log(`Seats: ${booking.seatCount}`);

}

function showMenu() {
    console.log(chalk.blue("Movie Ticket Booking System"));
    console.log("1.View Movies | 2.Book Tickets |3.View Booking");
    console.log("4. Cancel Booking| 5.Re-Book Tickets |6.Exit");
    rl.question("\nEnter your choice:", handleMenuChoice);

}
function handleMenuChoice(choice) {
    switch (choice.trim()) {
        case "1": displayMovies(); showMenu(); break;
        case "2": startBookingFlow(); break;
        case "3": viewCurrentBooking(); showMenu(); break;
        case "4": cancelBooking(movies); showMenu(); break;
        case "5": if (!getCurrentbooking()) {
            console.log(chalk.yellow("No booking available."));
            showMenu();
        } else {
            cancelBooking(movies);
            startBookingFlow();
        }
            break;
        case "6":
            console.log(chalk.green("Thank you Bye bye"));
            rl.close(); break;
        default:
            if (!handleInvalidAttempt("Invalid menu choice.")) {
                showMenu();
            }
            break;
    }
}

function startBookingFlow() {
    displayMovies();
    rl.question("\nEnter movieId: ", (movieIdInput) => {
        const movieId = Number(movieIdInput);

        validateMovieSelection(movies, movieId, (movieError, selectedMovie) => {
            if (movieError) {
                if (!handleInvalidAttempt(movieError)) {
                    startBookingFlow();
                }
                return;
            }
            rl.question("Enter time slot as displayed:", (timeInput) => {
                validateTimeSelection(selectedMovie, timeInput, (timeError, selectedShowtime) => {
                    if (timeError) {
                        if (!handleInvalidAttempt(timeError)) {
                            startBookingFlow();
                        }
                        return;
                    }
                    rl.question("Enter no. seats: ", async (seatInput) => {
                        const seatCount = Number(seatInput);
                        validateSeatCount(seatCount, async (seatError, validSeatCount) => {
                            if (seatError) {
                                if (!handleInvalidAttempt(seatError)) {
                                    startBookingFlow();
                                }
                                return;
                            }
                            try {
                                const booking = await processBookingAsync(
                                    selectedMovie,
                                    selectedShowtime,
                                    validSeatCount,

                                );
                                console.log(chalk.green("Booking Details"));
                                console.log(`Booking id: ${booking.bookingId}`);
                                console.log(`Movie: ${booking.movieTitle}`);
                                console.log(`Time: ${booking.time}`);
                                console.log(`Seats: ${booking.seatCount}`);
                                InvalidAttempts = 0;
                                showMenu();
                            }
                            catch(error){
                                if(!handleInvalidAttempt(error)){
                                    showMenu();
                                }
                            }
                        })
                    })
                })
            })
        })
    })
}
showMenu();