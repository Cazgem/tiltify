# Tiltify 0.1.0

This api for Tiltify is meant to act as an extension streamers' twitch bots in order to make interfacing with the Tiltify Donations platform more easily.

If you like what you see, consider visiting my patreon, or visit my twitch page for a paypal donation link.

This is under very heavy development. Please visit GitHub for up-to-date developments as we push toward release.

### What's New?


## Installation

`npm install tiltify`


## Implementation

### Includes
```javascript
const tiltify = require(`tiltify`);
const tmi = require('tmi.js');              // Recommended for chat functionality, though not strictly necessary to function.
const config = require('./config');         // Great to store variables safely
```



### Implement and Call the Class
```javascript
const tiltify = require(`tiltify`);
// Call once per command
const twitchCPR = new Twitch_CPR(twitchCPRopts, config.default.channel_id, config.default.streamer); // user-id === room-id in deployment, channel derived automatically
```

## USE





Developed by Cazgem for personal use at (https://twitch.tv/cazgem) as well as for his chatbot, Polyphony.

Started: Oct 18, 2020