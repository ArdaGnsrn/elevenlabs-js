const elevenLabs = require('../index');
const fs = require("fs");

require('dotenv').config();
const apiKey = process.env.ELEVENLABS_API_KEY;
let voiceId = null;

describe('Methods Unit Test', () => {
    beforeAll(() => {
        if (!apiKey) {
            throw new Error('ELEVENLABS_API_KEY environment variable is not set');
        }

        elevenLabs.setApiKey(apiKey);
    });

    // Models
    test("getModels() function", async () => {
        const models = await elevenLabs.getModels();
        expect(models).toBeInstanceOf(Array);
        expect(models.length).toBeGreaterThan(0);
    });

    // Voices
    test("getVoices() function", async () => {
        const voices = await elevenLabs.getVoices();
        expect(voices).toBeInstanceOf(Array);
        expect(voices.length).toBeGreaterThan(0);
        voiceId = voices[0]['voice_id'];
    });
    test("getDefaultVoiceSettings() function", async () => {
        const defaultVoiceSettings = await elevenLabs.getDefaultVoiceSettings();
        expect(defaultVoiceSettings).toBeInstanceOf(Object);
        expect(defaultVoiceSettings).toHaveProperty('stability');
        expect(defaultVoiceSettings).toHaveProperty('similarity_boost');
        expect(defaultVoiceSettings).toHaveProperty('style');
        expect(defaultVoiceSettings).toHaveProperty('use_speaker_boost');
    });
    test("getVoiceSettings() function", async () => {
        const defaultVoiceSettings = await elevenLabs.getVoiceSettings(voiceId);
        expect(defaultVoiceSettings).toBeInstanceOf(Object);
        expect(defaultVoiceSettings).toHaveProperty('stability');
        expect(defaultVoiceSettings).toHaveProperty('similarity_boost');
        expect(defaultVoiceSettings).toHaveProperty('style');
        expect(defaultVoiceSettings).toHaveProperty('use_speaker_boost');
    });
    test("getVoice() function", async () => {
        const defaultVoiceSettings = await elevenLabs.getVoice(voiceId, true);
        expect(defaultVoiceSettings).toBeInstanceOf(Object);
        expect(defaultVoiceSettings).toHaveProperty('voice_id');
        expect(defaultVoiceSettings).toHaveProperty('name');
        expect(defaultVoiceSettings).toHaveProperty('settings');

        const settings = defaultVoiceSettings['settings'];
        expect(settings).toHaveProperty('stability');
        expect(settings).toHaveProperty('similarity_boost');
        expect(settings).toHaveProperty('style');
        expect(settings).toHaveProperty('use_speaker_boost');
    });

    // Users
    test("getUser() function", async () => {
        const users = await elevenLabs.getUser();
        expect(users).toBeInstanceOf(Object);
    });
    test("getUserSubscription() function", async () => {
        const users = await elevenLabs.getUserSubscription();
        expect(users).toBeInstanceOf(Object);
        expect(users).toHaveProperty('status');
    });

    // TextToSpeech
    test("textToSpeech() function", async () => {
        const response = await elevenLabs.textToSpeech(voiceId, 'H');

        expect(response).toBeDefined();

        expect(response).toHaveProperty('pipe');
        expect(response).toHaveProperty('saveFile');

        expect(response.saveFile).toBeInstanceOf(Function);

        await response.saveFile('test.mp3');
        fs.access('test.mp3', fs.constants.F_OK, (err) => {
            expect(err).toBeNull();
        });
        fs.unlinkSync('test.mp3');
    });
});