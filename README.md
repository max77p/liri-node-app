# This is the liri-node-app
Language Interpretation and Recognition Interface

### Here are the features of the game

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
            * my-tweets
            * spotify-this-song
            * movie-this
            * do-what-it-says
4. The following are examples on how to initiate Liri:
            a) node liri.js my-tweets
            b) node liri.js spotify-this-song "drake take care"
            c) node liri.js movie-this "goonies"
            d) node liri.js do-what-it-says


5. The following are requirements for the app to work:
            a) npm install 'fs'
            b) npm install 'request'
            c) npm install 'node-spotify-api'
            d) npm install 'twitter'
