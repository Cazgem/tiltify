const request = require(`request`);
const Promise = require('promise');
class Cause {
    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
        this.entity = `causes`;
        console.log(`Tiltify Cause Module Initialized`);
    }
    fetchData(opts, field, callback) {
        console.log(`${opts.url}`)
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
    fetch(field, cause_id, callback) {
        if (!callback) {
            let _field = ``;
            let _cause_id = field;
            let _callback = cause_id;
            let urlStr = `${this.apiURL + this.entity}/${_cause_id}`;
            const opts = {
                url: urlStr,
                headers: {
                    Authorization: `Bearer ${this.access_token}`
                }
            };
            this.fetchData(opts, _field, _callback)
        } else {
            let _field = field;
            let _cause_id = cause_id;
            let _callback = callback;
            let urlStr = `${this.apiURL + this.entity}/${_cause_id}`;
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
module.exports = Cause;