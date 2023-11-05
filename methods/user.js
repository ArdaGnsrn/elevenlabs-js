const API = require("../utils/API");

async function getUserSubscription() {
    return await API.request("GET", "/user/subscriptions");
}

async function getUser() {
    return await API.request("GET", "/user");
}


module.exports = {
    getUserSubscription,
    getUser
}