const API = require("../utils/API");

async function getUserSubscriptionInfo() {
    return await API.request("GET", "/user/subscriptions");
}

async function getUser() {
    return await API.request("GET", "/user");
}



module.exports = {
    getUserSubscriptionInfo,
    getUser
}