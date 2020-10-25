const request = require(`request`);
const Promise = require('promise');
class User {
    constructor(self) {
        this._fetch = self._fetch
        this.access_token = self.access_token
        this.Promise = self.Promise
        this.request = self.request
        this.apiURL = `https://tiltify.com/api/v3/`;
        this.entity = `users`;
        console.log(`Tiltify User Module Initialized`);
    }
}

module.exports = User;