const request = require(`request`);
const Promise = require('promise');
class Campaigns {
    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
        this.entity = `campaigns`;
        console.log(`Tiltify Campaigns Module Initialized`);
    }
    fetchData(opts, field, callback) {
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                if (field !== ``) {
                    return callback(null, info.data[`${field}`]);
                } else {
                    return callback(null, info.data);
                }
            } else (
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
    fetchAll(opts, field, callback) {
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                return callback(null, info.data);
            } else (
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
    _request(opts, callback) {
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                return callback(null, info.data[0]);
            } else (
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
    _requestData(opts, callback) {
        request(opts, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                const info = JSON.parse(body);
                return callback(null, info.data);
            } else (
                console.log(`ERROR in Call! ${error}`)
            )
        });
    }
    getRecentDonations(campaign_id, callback) {
        let count = `10`;
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/donations?count=${count}`;

        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        console.log(opts.url);
        this._requestData(opts, callback)
    }
    getLastDonation(campaign_id, callback) {
        let count = `1`;
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/donations?count=${count}`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._request(opts, callback)
    }
    getDonations(campaign_id, callback) {
        let count = `500`;
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/donations?count=${count}`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    getRewards(campaign_id, callback) {
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/rewards`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    getPolls(campaign_id, callback) {
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/polls`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    getChallenges(campaign_id, callback) {
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/challenges`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    getSchedule(campaign_id, callback) {
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/schedule`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    getSupporting(campaign_id, callback) {
        let urlStr = `${this.apiURL + this.entity}/${campaign_id}/supporting-campaigns`;
        const opts = {
            url: urlStr,
            headers: {
                Authorization: `Bearer ${this.access_token}`
            }
        };
        this._requestData(opts, callback)
    }
    fetch(field, campaign_id, callback) {
        if (!callback) {
            let _field = ``;
            let _campaign_id = field;
            let _callback = campaign_id;
            let urlStr = `${this.apiURL + this.entity}/${_campaign_id}`;
            const opts = {
                url: urlStr,
                headers: {
                    Authorization: `Bearer ${this.access_token}`
                }
            };
            this.fetchData(opts, _field, _callback)
        } else {
            let _field = field;
            let _campaign_id = campaign_id;
            let _callback = callback;
            let urlStr = `${this.apiURL + this.entity}/${_campaign_id}`;
            const opts = {
                url: urlStr,
                headers: {
                    Authorization: `Bearer ${this.access_token}`
                }
            };
            this.fetchData(opts, _field, _callback)
        }
    }
}
module.exports = Campaigns;