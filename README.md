# Tiltify 0.2.0

This helper for Tiltify is meant to act as an extension streamers' twitch bots in order to make interfacing with the Tiltify Donations platform more easily.

If you like what you see, consider visiting my patreon, or visit my twitch page for a paypal donation link.

This is under very heavy development. Please visit GitHub for up-to-date developments as we push toward release.

### What's New?


## Installation

`npm install tiltify`


## Implementation

### Includes
```javascript
const tiltify = require(`tiltify`);
const config = require('./config');         // Great to store variables safely
const tmi = require('tmi.js');              // Recommended for chat functionality, though not strictly necessary to function.
const client = new tmi.client(config);
```


### Implement and Call the Class
```javascript
let tiltifyOpts = {
    access_token: `************************************************`,
    campaign_id: `*****`
}
const Tiltify = require(`tiltify`);
// Call once per command
const tiltify = new Tiltify(tiltifyOpts.access_token);
```

## USE

### Campaigns
```javascript
tiltify.Campaigns.getLastDonation(tiltifyOpts.campaign_id, function (err, result) {
        if (result.comment) {
            client.action(channel, `Last Donation: ${result.name} donated $${result.amount}! "${result.comment}"`)
        } else {
            client.action(channel, `Last Donation: ${result.name} donated $${result.amount}! curseLit`)
        }
});
```

```javascript
tiltify.Campaigns.getRewards(tiltifyOpts.campaign_id, function (err, result) {
    result.forEach((data) => {
        client.action(channel, `${data.name} Unlocked! ${data.remaining} Remain to be claimed! curseLit`)
    }
});
```





Developed by Cazgem for personal use at (https://twitch.tv/cazgem) as well as for his chatbot, Polyphony.

Started: Oct 18, 2020