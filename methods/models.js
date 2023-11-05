const API = require("../utils/API");

async function getModels() {
    return await API.request("GET", "/models");
}

module.exports = {getModels}