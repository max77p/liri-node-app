require("dotenv").config();

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

spotify
.search({type: 'track',query: 'Take care',limit: 1})
.then(function (response) {
// console.log(response);
var albuminfo=JSON.stringify(response.tracks.items[0].album.name, null, 2);//album name
var artistinfo=JSON.stringify(response.tracks.items[0].album.artists[0].name, null, 2);//artist name
var songinfo=JSON.stringify(response.tracks.items[0].name, null, 2);//song name
var linkinfo=JSON.stringify(response.tracks.items[0].external_urls.spotify, null, 2);//song link

var main=JSON.stringify(response.tracks, null, 2);
console.log(albuminfo);
console.log(artistinfo);
console.log(songinfo);
console.log(linkinfo);
})
.catch(function (err) {
    console.log(err);
});


// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from