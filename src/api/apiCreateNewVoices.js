import { useEffect, useState } from "react";

export default function CreateNewVoice() {
  const [voiceName, setVoiceName] = useState("");
  const [voiceFile, setVoiceFile] = useState(null);

  function handleVoiceNameChange(e) {
    setVoiceName(e.target.value);
  }

  function handleFileChange(e) {
    setVoiceFile(e.target.files[0]); 
  }

  useEffect(() => {
    console.log(`TRYING\nVoice Name: ${voiceName}\nVoice File: ${voiceFile}`);
  }, [voiceFile, voiceName]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`TRYING\nVoice Name: ${voiceName}\nVoice File: ${voiceFile.name}`);

    const formData = new FormData(); // Create a FormData object
    formData.append("voiceName", voiceName);
    formData.append("sampleFile", voiceFile);

    try {
      const response = await fetch('http://localhost:4005/api/playht/createCustomVoice', {
        method: 'POST',
        body: formData, // Send the FormData object
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
