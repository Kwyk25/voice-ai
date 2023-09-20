const playht = require("express").Router();
const axios = require("axios");
const FormData = require("form-data");

// Middleware to handle file uploads
const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// GET ALL ULTRA REALISTIC VOICES
playht.get("/ultraRealisticVoices", async (req, res) => {
  try {
    const response = await axios.get("https://play.ht/api/v2/voices", {
      headers: {
        accept: "application/json",
        AUTHORIZATION: process.env.REACT_APP_PLAYHT_API_KEY,
        "X-USER-ID": process.env.REACT_APP_PLAYHT_API_ID,
      },
    });
    const data = response.data;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//GET ALL CUSTOM VOICES
playht.get("/listCustomVoice", async (req, res) => {
  try {
    const response = await axios.get("https://play.ht/api/v2/cloned-voices", {
      headers: {
        accept: "application/json",
        AUTHORIZATION: process.env.REACT_APP_PLAYHT_API_KEY,
        "X-USER-ID": process.env.REACT_APP_PLAYHT_API_ID,
      },
    });
    const data = response.data;
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//GET AUDIOURL'S AND INFORMATION ABOUT TRANSCRIPTIONID
playht.get("/retrieveTranscription", async (req, res) => {
  try {
    const transcription = req.query.transcriptionId

    const response = await axios.get(`https://play.ht/api/v2/tts/${transcription}`, {
      headers: {
        accept: "application/json",
        AUTHORIZATION: process.env.REACT_APP_PLAYHT_API_KEY,
        "X-USER-ID": process.env.REACT_APP_PLAYHT_API_ID,
      },
    });

    const data = response.data;
    console.log("Server Response Data:", response.data);
    res.json(data)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//POST FOR CREATION OF CUSTOM VOICES
playht.post(
  "/createCustomVoice",
  upload.single("sampleFile"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const form = new FormData();
      form.append("sample_file", req.file.buffer, {
        filename: req.file.originalname,
      });

      form.append("voice_name", req.body.voiceName || "Default Voice Name"); // Use the voice_name from the request body or provide a default value

      const response = await axios.post(
        "https://play.ht/api/v2/cloned-voices/instant",
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${process.env.REACT_APP_PLAYHT_API_KEY}`,
            "X-User-Id": process.env.REACT_APP_PLAYHT_API_ID,
          },
        }
      );

      const data = response.data;
      console.log(data);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server error" });
    }
  }
);

module.exports = playht;
