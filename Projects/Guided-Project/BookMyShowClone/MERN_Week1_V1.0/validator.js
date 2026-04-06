//Callback based validation functions

function validateMovieSelection(movies,movieId,Callback){
    const selectedMovie = movies.find((movie)=>movie.id===movieId);
    if(!selectedMovie){
        return Callback("Invalid movie selection. Choose a valid movie ID.",null);
    }
    Callback(null,selectedMovie);
        
}

function validateTimeSelection(movie,selectedTime,Callback){
    const selectedShowTime = movie.showTimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());
    if(!selectedShowTime){
        return Callback("Invalid time slot selection. Choose a valid show time.",null);
    }
    Callback(null,selectedShowTime);
        
}

function validateSeatCount(seatCount,Callback){
    if(isNaN(seatCount) || seatCount<=0){
        return Callback("Invalid seat count. Enter a valid seat count.",null);
    }
    Callback(null,seatCount);
        
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};