//Movies.js
// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Dhurandar2",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:70},
            {time: "6:00 AM",seatsAvailable:300}
        ]
    },
    {
        id:2,
        title:"LoveMoktile",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:70},
            {time: "6:00 AM",seatsAvailable:300}
        ]
    },
    {
        id:3,
        title:"KGF",
        showTimes:[
            {time: "11:00 AM",seatsAvailable:100},
            {time: "4:00 PM",seatsAvailable:70},
            {time: "8:00 AM",seatsAvailable:300}
        ]
    }
];
//Export the movie data so that other file can use it
module.exports = movies;