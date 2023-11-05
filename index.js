const Storage = require("./utils/Storage");

const modelsMethods = require("./methods/models");
const textToSpeechMethods = require("./methods/text-to-speech");
const userMethods = require("./methods/user");
const voicesMethods = require("./methods/voices");

function setApiKey(apiKey) {
    Storage.apiKey = apiKey;
}

module.exports = {
    ...modelsMethods,
    ...textToSpeechMethods,
    ...userMethods,
    ...voicesMethods,
    setApiKey
}

