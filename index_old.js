//Tiltify v 0.1
const request = require(`request`);
const Promise = require('promise');
module.exports = Tiltify;
function Tiltify(tiltifyOpts) {
    this.version = `0.1.0`;
    apiURL = `https://tiltify.com/api/v3/`;
    access_token = tiltifyOpts.access_token;
    campaign_id = tiltifyOpts.campaign_id;
}
Tiltify.prototype.campaigns = function (resource = ``, callback) {
    console.log(`Tiltify Module Initialized`);
    let entities = `campaigns`;
    let endpoint = `/${resource[0]}`;
    let count = resource[1] || `10`;
    if (resource[1]) {
        urlStr = `${apiURL + entities}/${campaign_id}${endpoint}?count=${count}`;
    } else {
        urlStr = `${apiURL + entities}/${campaign_id}`
    }
    const opts = {
        url: urlStr,
        headers: {
            Authorization: `Bearer ${access_token}`
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
Tiltify.prototype.default = function (resource = ``, callback) {
    console.log(`Tiltify Module Initialized`);
    let entities = `campaigns`;
    let endpoint = `/${resource}`;
    let count = resource[1] || `10`;
    urlStr = `${apiURL + entities}/${campaign_id}${endpoint}`
    const opts = {
        url: urlStr,
        headers: {
            Authorization: `Bearer ${access_token}`
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
Tiltify.prototype.test = function (id, callback) {
    console.log(`Tiltify Module Initialized`);
    let entities = `campaigns`;
    let param = id;
    const opts = {
        url: `${apiURL + entities}/${param}`,
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    };
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