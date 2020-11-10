const request = require(`request`);
const Promise = require('promise');
class FundraisingEvents {
    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
        this.entity = `fundraising-events`;
        console.log(`Tiltify Fundraising Events Module Initialized`);
    }
}

module.exports = FundraisingEvents;