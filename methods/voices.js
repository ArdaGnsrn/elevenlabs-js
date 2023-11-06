const API = require("../utils/API");
const {defaultVoiceSettings} = require("../config");

async function getVoices() {
    return (await API.request("GET", "/voices"))['voices'];
}

async function getDefaultVoiceSettings() {
    return API.request("GET", "/voices/settings/default");
}

async function getVoiceSettings(voiceId) {
    return API.request("GET", `/voices/${voiceId}/settings`);
}

async function getVoice(voiceId, withSettings = false) {
    return API.request("GET", `/voices/${voiceId}`, {
        params: {
            with_settings: withSettings
        }
    });
}

async function deleteVoice(voiceId) {
    return API.request("DELETE", `/voices/${voiceId}/settings`);
}

async function editVoiceSettings(voiceId, voiceSettings = defaultVoiceSettings) {
    return API.request("POST", `/voices/${voiceId}/settings`, {
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