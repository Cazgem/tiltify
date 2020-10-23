
const Campaign = require('./lib/campaigns')
// const Cause = require('./lib/cause')
// const FundraisingEvents = require('./lib/fundraisingEvents')
// const Team = require('./lib/team')
// const User = require('./lib/user')

version = `0.1.1`;
class Tiltify {
    constructor(access_token) {
        this.access_token = access_token;
        this.Campaigns = new Campaign(this)
        // this.Causes = new Cause(this)
        // this.FundraisingEvents = new FundraisingEvents(this)
        // this.Team = new Team(this)
        // this.User = new User(this)
    }
}
module.exports = Tiltify;