const playht = require('express').Router();
const axios = require('axios');

// GET ALL ULTRA REALISTIC VOICES
playht.get('/ultraRealisticVoices', async (req, res) => {
    try {
        const response = await axios.get('https://play.ht/api/v2/voices', {
            headers: {
                accept: 'application/json',
                AUTHORIZATION: process.env.REACT_APP_PLAYHT_API_KEY,
                'X-USER-ID': process.env.REACT_APP_PLAYHT_API_ID
            }
        });
        const data = response.data;
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = playht;
