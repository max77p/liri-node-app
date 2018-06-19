# This is the liri-node-app
Language Interpretation and Recognition Interface

### Here are the features of the Node.js App

1. This is a command line app using Node.js

2. You will need your own .env file with the following:

            # Spotify API keys
            SPOTIFY_ID=
            SPOTIFY_SECRET=

            # Twitter API keys
            TWITTER_CONSUMER_KEY=
            TWITTER_CONSUMER_SECRET=
            TWITTER_ACCESS_TOKEN_KEY=
            TWITTER_ACCESS_TOKEN_SECRET=

3. Liri will take one of the following commands:
- my-tweets
- spotify-this-song
- movie-this
-do-what-it-says

4. The following are examples on how to initiate Liri:
- node liri.js my-tweets
- node liri.js spotify-this-song "drake take care"
- node liri.js movie-this "goonies"
- node liri.js do-what-it-says


5. The following are requirements for the app to work:
- npm install 'fs'
- npm install 'request'
- npm install 'node-spotify-api'
- npm install 'twitter'
