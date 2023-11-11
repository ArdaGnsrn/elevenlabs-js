ElevenLabs.io API for NodeJS
============
[![npm version](https://badge.fury.io/js/elevenlabs-js.svg)](https://badge.fury.io/js/elevenlabs-js)
[![GitHub Stars](https://img.shields.io/github/stars/ardagnsrn/elevenlabs-js.svg)](https://github.com/ardagnsrn/elevenlabs-js/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/ardagnsrn/elevenlabs-js.svg)](https://github.com/ardagnsrn/elevenlabs-js/issues)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/jestjs/jest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is an Open Source NodeJS package for [elevenlabs.io](https://elevenlabs.io) Text to Speech API. You can
find the Official API document here: [https://api.elevenlabs.io/docs](https://api.elevenlabs.io/docs)

⭐⭐\
*If you like this project, please consider **starring it**. Stars are a way to show appreciation and interest in this
project. And who knows, I may be more inclined to improve it further.*\
⭐⭐

## Buy me a coffee

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying
me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/ardagnsrn" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Table of Contents

- [Supported Methods](#supported-methods)
- [Parameters](#parameters)
  - [Voice Settings](#voice-settings)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [textToSpeech() Method](#texttospeech-method)
  - [getModels() Method](#getmodels-method)
  - [getVoices() Method](#getvoices-method)
  - [getDefaultVoiceSettings() Method](#getdefaultvoicesettings-method)
  - [getVoiceSettings() Method](#getvoicesettings-method)
  - [getVoice() Method](#getvoice-method)
  - [deleteVoice() Method](#deletevoice-method)
  - [editVoiceSettings() Method](#editvoicesettings-method)
  - [getUserSubscription() Method](#getusersubscription-method)
  - [getUser() Method](#getuser-method)
- [License](#license)

## Supported Methods

| Method                      | Parameters                                    | EndPoint                               | HTTP Method |
|-----------------------------|-----------------------------------------------|----------------------------------------|-------------|
| `textToSpeech()`            | `voiceId`, `text`, `modelId`, `voiceSettings` | `/v1/text-to-speech/{voice_id}/stream` | POST        |
| `getModels()`               | N/A                                           | `/v1/models`                           | GET         |
| `getVoices()`               | N/A                                           | `/v1/voices`                           | GET         |
| `getDefaultVoiceSettings()` | N/A                                           | `/v1/voices/settings/default`          | GET         |
| `getVoiceSettings()`        | `voiceId`                                     | `/v1/voices/{voiceId}/settings`        | GET         |
| `getVoice()`                | `voiceId`, `withSettings`                     | `/v1/voices/{voiceId}`                 | GET         |
| `deleteVoice()`             | `voiceId`                                     | `/v1/voices/{voiceId}`                 | DELETE      |
| `editVoiceSettings()`       | `voiceId`, `voiceSettings`                    | `/v1/voices/{voiceId}/settings/edit`   | POST        |
| `getUserSubscription()`     | N/A                                           | `/v1/user/subscription`                | GET         |
| `getUser()`                 | N/A                                           | `/v1/user`                             | GET         |

## Parameters

| Parameter     | Type   | Description                                                                             | Required | Default                                                                           |
|---------------|--------|-----------------------------------------------------------------------------------------|----------|-----------------------------------------------------------------------------------|
| voiceId       | String | The ID of the voice to use. You can get a list of available voices using `getVoices()`. | Yes      | N/A                                                                               |
| text          | String | The text to convert to speech.                                                          | Yes      | N/A                                                                               |
| modelId       | String | The ID of the model to use. You can get a list of available models using `getModels()`. | No       | `eleven_multilingual_v2`                                                          |
| voiceSettings | Object | The settings to use for the voice.                                                      | No       | `{stability: 0.95, similarity_boost: 0.75, style: 0.06, use_speaker_boost: true}` |

### Voice Settings

| Parameter         | Type    | Description                          | Default |
|-------------------|---------|--------------------------------------|---------|
| stability         | Float   | The stability of the voice.          | 0.95    |
| similarity_boost  | Float   | The similarity boost of the voice.   | 0.75    |
| style             | Float   | The style of the voice.              | 0.06    |
| use_speaker_boost | Boolean | Whether to use speaker boost or not. | true    |

## Getting Started
- Install the package using `npm i elevenlabs-js`.
- Import the package using `const elevenLabs = require('elevenlabs-js')`.
- Set your API key using `elevenLabs.setApiKey('YOUR_API_KEY')`.
- Utilize the available methods to interact with the elevenlabs.io API.

## Usage

### textToSpeech() Method
Generate a text to speech audio file. You can either save the file or get the pipe and do whatever you want with it.
```js
const elevenLabs = require('elevenlabs-js');
const fs = require("fs");

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.textToSpeech("YOUR_VOICE_ID", "Hello World!", "elevenlabs_multilingual_v2", {
    stability: 0.95,
    similarity_boost: 0.75,
    style: 0.06,
    use_speaker_boost: true
}).then(async (res) => {
    // You can save the file
    await res.saveFile("test.mp3")

    // Or get the pipe and do whatever you want with it (like streaming it to the client)
    const pipe = await res.pipe;
    pipe(fs.createWriteStream("test-with-pipe.mp3"));
});
```

### getModels() Method
Get a list of available models.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getModels().then((res) => {
    console.log("models", res);
});
```

### getVoices() Method
Get a list of available voices.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getVoices().then((res) => {
    console.log("voices", res);
});
```

### getDefaultVoiceSettings() Method
Get the default voice settings.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getDefaultVoiceSettings().then((res) => {
    console.log("default voice settings", res);
});
```

### getVoiceSettings() Method
Get the voice settings of a voice.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getVoiceSettings("YOUR_VOICE_ID").then((res) => {
    console.log("voice settings", res);
});
```

### getVoice() Method
Get a voice.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getVoice("YOUR_VOICE_ID").then((res) => {
    console.log("voice", res);
});
```

### deleteVoice() Method
Delete a voice.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.deleteVoice("YOUR_VOICE_ID").then((res) => {
    console.log("voice", res);
});
```

### editVoiceSettings() Method

Edit the voice settings of a voice.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.editVoiceSettings("YOUR_VOICE_ID", {
    stability: 0.95,
    similarity_boost: 0.75,
    style: 0.06,
    use_speaker_boost: true
}).then((res) => {
    console.log("voice settings", res);
});
```

### getUserSubscription() Method
Get the user subscription information.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getUserSubscription().then((res) => {
    console.log("user subscription", res);
});
```

### getUser() Method
Get the user information.
```js
const elevenLabs = require('elevenlabs-js');

// Set your API key
elevenLabs.setApiKey('YOUR_API_KEY');

elevenLabs.getUser().then((res) => {
    console.log("user", res);
});
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

