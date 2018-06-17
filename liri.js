require("dotenv").config();
var fs = require('fs');
var request = require('request');
var keys = require("./keys");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var inquirer = require("inquirer");
var userInput = process.argv[2]; //takes in command input to trigger specific search
var searchQuery = process.argv.slice(3).join(' '); // combines anything typed from arg[3] and on with spaces and passes it as one search query

if (userInput === 'spotify-this-song') {
    if (!searchQuery) { //user has to enter search query with 'spotify-this-song', if not tell default to predefined list
        readfromFile();
    } else {
        searchSpotify(searchQuery);
        // console.log(process.argv);
    }
} else if (userInput === 'my-tweets') {
    if (!searchQuery) { //user doesn't have to add extra parameters, if they do tell them to only enter 'my-tweets' only
        console.log(searchQuery);
        searchTweets(userInput);
    } else {
        console.log("Please don't include anything with 'my-tweets'");
    }
} else if (userInput === 'movie-this') {
    if (!searchQuery) { //user has to enter search query with 'movie-this', if not default to 'mr.nobody'
        searchMovies("Mr.Nobody");
    } else {
        searchMovies(searchQuery);
    }
} else if (userInput === "do-what-it-says") {
    readfromFile();
}

function searchMovies(elMovie) {
    request("http://www.omdbapi.com/?t=" + elMovie + "&apikey=trilogy", function (error, response, body) {
        // If the request is successful (i.e. if the response status code is 200)
        // console.log(JSON.parse(body));
        if (JSON.parse(body).Response === "False") {
            console.log("please try search again");
        } else if (!error && response.statusCode === 200) {
            // 
            const parsedBody = JSON.parse(body);
            console.log("Movie Year: " + parsedBody.Year);
            console.log("IMDB Rating: " + parsedBody.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + parsedBody.Ratings[0].Value);
            console.log("Country: " + parsedBody.Country);
            console.log("Language: " + parsedBody.Language);
            console.log("Plot: " + parsedBody.Plot);
            console.log("Actors: " + parsedBody.Actors);
        }
    });
}

function searchTweets(elTweet) { //search tweets of authenticated user up to 20 max
    client.get('statuses/user_timeline', count = "20", function (error, tweets, response) {
        if (!error && response.statusCode === 200) {
            console.log(tweets.length);
            for (var i = 0; i < tweets.length; i++) {
                console.log("Tweet number " + (i + 1) + ": " + tweets[i].created_at + "\n" + " Tweet was: " + tweets[i].text + " \n");
            }
        }
    });
}

function searchSpotify(elName) { //takes user input and searches spotify
    spotify
        .search({
            type: 'track',
            query: elName,
            limit: 1
        })
        .then(function (response) {
            // console.log(response);
            var keys = Object.keys(response.tracks);
            // console.log(response.tracks);
            var albuminfo = JSON.stringify(response.tracks.items[0].album.name, null, 2); //album name
            var artistinfo = JSON.stringify(response.tracks.items[0].album.artists[0].name, null, 2); //artist name
            var songinfo = JSON.stringify(response.tracks.items[0].name, null, 2); //song name
            var linkinfo = JSON.stringify(response.tracks.items[0].external_urls.spotify, null, 2); //song link

            // var main=JSON.stringify(response.tracks, null, 2);
            console.log("Album: "+albuminfo);
            console.log("Artist: "+artistinfo);
            console.log("Song: "+songinfo);
            console.log("Link to song: "+linkinfo);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function readfromFile() {
    fs.readFile("random.txt", "UTF-8", function (err, data) {
        if (err) {
            if (err.errno == -2) {
                console.log("file doesn't exist");
                // createAbilities();
            } else {
                console.log(err);
            }
        } else {
            var songlist = JSON.parse(data);
            for (ele in songlist) {
                // console.log(songlist[ele]);
                var randomOrder=Math.floor(Math.random() * songlist[ele].length);
                // console.log(randomOrder);
                searchSpotify(songlist[ele][randomOrder]);        
            }
        }
    });
}