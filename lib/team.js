const request = require(`request`);
const Promise = require('promise');
class Team {
    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
        this.entity = `teams`;
        console.log(`Tiltify Team Module Initialized`);
    }
}

module.exports = Team;