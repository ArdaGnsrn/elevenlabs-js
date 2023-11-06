const API = require("../utils/API");

async function getUserSubscription() {
    return API.request("GET", "/user/subscription");
}

async function getUser() {
    return API.request("GET", "/user");
}


module.exports = {
    getUserSubscription,
    getUser
}