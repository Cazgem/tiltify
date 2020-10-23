//Tiltify v 0.1
const request = require(`request`);
const Promise = require('promise');
module.exports = Tiltify;
function Tiltify(tiltifyOpts) {
    this.version = `0.1.0`;
    this.apiURL = `https://tiltify.com/api/v3/`;
    this.access_token = tiltifyOpts.access_token;
}
Tiltify.prototype.test = function (tiltifyOpts) {
    console.log(`Tiltify Module Initialized`);
}
Tiltify.prototype.test = function (tiltifyOpts) {
    const opts = {
        url: `https://api.twitch.tv/helix/users?login=${user}`,
        headers: {
            'Authorization': `Bearer ${that.OAuth}`,
            'Client-ID': `${results.client_id}`
        }
    };
    request(opts, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body);
            return callback(null, info.data[0]);
        } else (
            console.log(`ERROR in USERID! ${JSON.stringify(response)}`)
        )
    });
}