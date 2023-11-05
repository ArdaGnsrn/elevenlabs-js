const API = require("../utils/API");
const {defaultVoiceSettings} = require("../config");

async function getVoices() {
    return await API.request("GET", "/voices");
}

async function getDefaultVoiceSettings() {
    return await API.request("GET", "/voices/settings/default");
}

async function getVoiceSettings(voiceId) {
    return await API.request("GET", `/voices/${voiceId}/settings`);
}

async function getVoice(voiceId, withSettings = false) {
    return await API.request("GET", `/voices/${voiceId}`, {
        params: {
            withSettings
        }
    });
}

async function deleteVoice(voiceId) {
    return await API.request("DELETE", `/voices/${voiceId}/settings`);
}

async function editVoiceSettings(voiceId, voiceSettings = defaultVoiceSettings) {
    return await API.request("POST", `/voices/${voiceId}/settings`, {
        data: voiceSettings
    });
}

/**
 * Does not support yet
 * @deprecated
 */
async function addVoice() {
    throw new Error("Not supported yet");
}

/**
 * Does not support yet
 * @deprecated
 */
async function editVoice() {
    throw new Error("Not supported yet");
}


module.exports = {
    getVoices,
    getDefaultVoiceSettings,
    getVoiceSettings,
    getVoice,
    deleteVoice,
    editVoiceSettings,
    addVoice,
    editVoice
}