const API = require("../utils/API");
const {createWriteStream} = require("fs");
const {defaultVoiceSettings} = require("../config");

async function textToSpeech(voiceId, text, modelId = "eleven_multilingual_v2", voiceSettings = defaultVoiceSettings) {
    const response = await API.request("POST", `/text-to-speech/${voiceId}`, {
        data: {
            "text": text,
            "model_id": modelId,
            "voice_settings": voiceSettings
        },
        headers: {
            "Accept": "audio/mpeg"
        },
        responseType: "stream",
    });
    return {
        saveFile: saveFile(response),
        pipe: response.pipe
    }
}

function saveFile(response) {
    return async function (fileName = "audio.mp3") {
        response.pipe(createWriteStream(fileName));
        return new Promise((resolve, reject) => {
            response.on("end", () => {
                resolve();
            });
            response.on("error", () => {
                reject();
            });
        })
    }
}


module.exports = {
    textToSpeech
}