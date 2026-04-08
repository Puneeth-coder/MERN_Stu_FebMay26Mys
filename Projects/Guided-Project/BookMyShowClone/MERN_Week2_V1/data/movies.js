//Movies.js
// This file stores the movie data used in the CLI App

const movies = [
    {
        id:1,
        title:"Kotigobba",
        language:"Kannada",
        genre:"auction Thriller",
        city:"Mysuru",
        cinema:"Nexus Mall-Screen 1",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:250},
            {time: "1:00 PM",seatsAvailable:250},
            {time: "6:00 AM",seatsAvailable:300}
        ]
    },
    {
        id:2,
        title:"LoveMoktile",
        language:"Kannada",
        genre:"Romantic",
        city:"Mysuru",
        cinema:"DRC Mall-Screen 2",
        showTimes:[
            {time: "10:00 AM",seatsAvailable:100},
            {time: "1:00 PM",seatsAvailable:70},
            {time: "6:00 AM",seatsAvailable:200}
        ]
    },
    {
        id:3,
        title:"Nagarahavu",
        language:"Kannada",
        genre:"auction Thriller",
        city:"Bengaluru",
        cinema:"Mall-of-Asia-Screen 3",
        showTimes:[
            {time: "11:00 AM",seatsAvailable:100},
            {time: "4:00 PM",seatsAvailable:70},
            {time: "8:00 AM",seatsAvailable:300}
        ]
    }
];
//Export the movie data so that other file can use it
module.exports = movies;