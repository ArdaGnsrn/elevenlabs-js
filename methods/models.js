const API = require("../utils/API");

async function getModels() {
    return API.request("GET", "/models");
}

module.exports = {getModels}