import { useEffect, useState } from "react";

export default function CreateNewVoice() {
  const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
  const userId = process.env.REACT_APP_PLAYHT_API_ID;
  const [voiceName, setVoiceName] = useState("");
  const [voiceFile, setVoiceFile] = useState(null);

  function handleVoiceNameChange(e) {
    setVoiceName(e.target.value);
  }

  function handleFileChange(e) {
    setVoiceFile(e.target.value);
  }

  useEffect(() => {
    console.log(`TRYING\nVoice Name: ${voiceName}\nVoice File: ${voiceFile}`);
  }, [voiceFile, voiceName]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`TRYING\nVoice Name: ${voiceName}\nVoice File: ${voiceFile}`);
    createVoice();
  }

  function listVoices() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        AUTHORIZATION: secretKey,
        "X-USER-ID": userId,
      },
    };

    fetch("https://play.ht/api/v2/cloned-voices", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    // listVoices()
  }, []);

  async function createVoice() {
    try {
        const response = await fetch('http://localhost:4005/api/createVoice', { // Use relative path to your server
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json', // Update content-type if needed
          },
          body: JSON.stringify({ voiceName, voiceFile }),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log('Voice clone created:', data);
      } catch (error) {
        console.error('Error creating voice clone:', error);
      }
  }

  return (
    <div>
      <h1>Create Instant Voice Clone</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="voiceName">Voice Name:</label>
          <input
            type="text"
            id="voiceName"
            value={voiceName}
            onChange={handleVoiceNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sampleFile">Sample Audio File:</label>
          <input
            type="file"
            id="sampleFile"
            accept="audio/*"
            value={voiceFile}
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <button type="submit">Create Voice Clone</button>
        </div>
      </form>
    </div>
  );
}
