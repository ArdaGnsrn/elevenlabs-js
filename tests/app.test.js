const elevenLabs = require('../index');
const Storage = require('../utils/Storage');

describe('Static Functions Unit Test', () => {
    test('setApiKey() function should set the API key in the Storage class', () => {
        const apiKey = 'YOUR_API_KEY';
        elevenLabs.setApiKey(apiKey);
        expect(Storage.apiKey).toBe(apiKey)
    })
});