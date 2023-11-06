const axios = require("axios");
const Storage = require("./Storage");
const {baseUrl} = require("../config");

async function request(method, url, options = {}) {
    try {
        return (await axios({
            ...options,
            baseURL: baseUrl,
            method,
            url,
            headers: {
                "xi-api-key": Storage.apiKey,
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
        })).data;
    } catch (e) {
        console.error("Exception", e)
        throw e;
    }
}

module.exports = {
    request
}