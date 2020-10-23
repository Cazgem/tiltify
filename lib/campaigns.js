const request = require(`request`);
const Promise = require('promise');
class Campaigns {

    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
    }
    getRecentDonations(campaign_id, callback) {
        console.log(`Tiltify Module Initialized`);
        let entities = `campaigns`;
        let count = resource[1] || `10`;
        let urlStr = `${this.apiURL + entities}/${campaign_id}/donations?count=${count}`;

        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        console.log(opts.url);
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                // return callback(null, info.data[0]);
                return callback(null, info.data);
            } else (
                // console.log(`ERROR in Call! ${JSON.stringify(response)}`)
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
    getLastDonation(campaign_id, callback) {
        console.log(`Tiltify Module Initialized`);
        let entities = `campaigns`;
        let count = `1`;
        let urlStr = `${this.apiURL + entities}/${campaign_id}/donations?count=${count}`;

        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        console.log(opts.url);
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                // return callback(null, info.data[0]);
                return callback(null, info.data[0]);
            } else (
                // console.log(`ERROR in Call! ${JSON.stringify(response)}`)
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
}
module.exports = Campaigns;