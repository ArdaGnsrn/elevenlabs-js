ElevenLabs.io API for NodeJS
============
[![npm version](https://badge.fury.io/js/elevenlabs-js.svg)](https://badge.fury.io/js/elevenlabs-js)
[![GitHub Stars](https://img.shields.io/github/stars/ardagnsrn/elevenlabs-js.svg)](https://github.com/ardagnsrn/elevenlabs-js/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/ardagnsrn/elevenlabs-js.svg)](https://github.com/ardagnsrn/elevenlabs-js/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is an Open Source NodeJS package for [elevenlabs.io](https://elevenlabs.io) Text to Speech API. You can
find the Official API document here: [https://api.elevenlabs.io/docs](https://api.elevenlabs.io/docs)

---
## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/ardagnsrn" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

---

## Supported Methods

- `getModels()`
- `textToSpeech(voiceId, text, modelId, voiceSettings)`
- `getUserSubscription()`
- `getUser()`
- `getVoices()`
- `getDefaultVoiceSettings()`
- `getVoiceSettings(voiceId)`
- `getVoice(voiceId, withSettings = false)`
- `deleteVoice(voiceId)`
- `editVoiceSettings(voiceId, voiceSettings)`
- ~~`addVoice()`~~ (Soon)
- ~~`editVoice()`~~ (Soon)

## Parameters

| Parameter     | Type   | Description                                                                             | Required | Default                                                                        |
|---------------|--------|-----------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------|
| voiceId       | string | The ID of the voice to use. You can get a list of available voices using `getVoices()`. | Yes      | -                                                                              |
| text          | string | The text to convert to speech.                                                          | Yes      | -                                                                              |
| modelId       | string | The ID of the model to use. You can get a list of available models using `getModels()`. | No       | `eleven_multilingual_v2`                                                       |
| voiceSettings | object | The settings to use for the voice.                                                      | No       | `{stability: 0.95, similarityBoost: 0.75, style: 0.06, useSpeakerBoost: true}` |

## Installation

```bash
npm i elevenlabs-js
```

## Usage

```js
const elevenLabs = require('elevenlabs-js');
const {createWriteStream} = require("fs");

(async () => {
    elevenLabs.setApiKey('YOUR_API_KEY');

    // Example: Text to Speech
    const response = await elevenLabs.textToSpeech("VOICE_ID", "Hello World");

    // Save the audio file
    await response.saveFile('hello-world.mp3');

    // Or you can use pipe directly
    const data = response.pipe(createWriteStream("test.mp3"));
})();
```

## Getting Started

- Install the package using `npm i elevenlabs-js`.
- Import the package using `const elevenLabs = require('elevenlabs-js')`.
- Set your API key using `elevenLabs.setApiKey('YOUR_API_KEY')`.
- Utilize the available methods to interact with the elevenlabs.io API.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

