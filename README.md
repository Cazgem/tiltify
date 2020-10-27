# Tiltify 0.3.0

This helper for Tiltify is meant to act as an extension streamers' twitch bots in order to make interfacing with the Tiltify Donations platform more easily.

If you like what you see, consider visiting my patreon, or visit my twitch page for a paypal donation link. 

This is under very heavy development. Please visit GitHub for up-to-date developments as we push toward release.

### What's New in 0.3 Alpha?
Causes Module Implemented with Fetch Endpoint to begin with, further functionality to come. (Documentation is slightly behind here) This "fetch" protocol to acquire individual information bits such as name, description, etc. about individual campaigns.

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

### Fetch Protocol (Campaigns)

Option 1 [multi-point fetch]
```javascript
tiltify.Campaigns.fetch(campaign_id, function (err, campaign) {
    client.action(channel, `Welcome To ${campaign.name}! Donate here: ${campaign.url}`)
});
```

Option 2 [Single-point fetch]
```javascript
tiltify.Campaigns.fetch(`name`, tiltifyOpts.campaign_id, function (err, result) {
        client.action(channel, `Currently Raising Money for ${data}! Donate at the link below.`)
});
```

### Causes
```javascript
tiltify.Causes.fetch(campaign.causeId, function (err, cause) {
    client.action(channel, `${channel.slice(1)} is currently Raising Money for ${cause.name} as part of the ${campaign.name}! ${cause.about}`)
})
```




Developed by Cazgem for personal use at (https://twitch.tv/cazgem) as well as for his chatbot, Polyphony.

Started: Oct 18, 2020