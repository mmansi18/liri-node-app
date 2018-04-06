require("dotenv").config();

let keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
let fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
let [node, path, command, value] = process.argv;

// if spotify-that-song, run function to call spotify api
// if (command === 'my-tweets') {
//     getTweets();
// } else if(command === 'spotify-this-song') {
//     getSongInfo();
// } else if (command === 'movie-this') {
//     getMovieInfo();
// } else if (command === 'do-what-it-says') {
//     doIt();
// }
function getTweets() {
    var params = {screen_name: 'sonsofcodearchy'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            // console.log(tweets[1])
            for (let i = 0; i < 20; i++) {
                let t = tweets[i]
                let listing = i + 1
                console.log(listing + ")" + t.text + '. Created: ' + t.created_at);
            }
        }
    })
}
function getSongInfo(){
    
}
let doIt = function() {
    fs.readFile('./random.txt', 'utf8', function(error, data) {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    })
}