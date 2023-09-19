import React, { useEffect, useState } from "react";
import apiClientLogic from "./apiClientLogic"; // Adjust the import path as needed

function ApiClient({ voice, text, speed, title }) {
  const [transcriptionId, setTranscriptionId] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const { transcriptionId, loggedUser } = apiClientLogic(
      voice,
      text,
      speed,
      title
    );
    
    setTranscriptionId(transcriptionId);
    setLoggedUser(loggedUser);
    console.log("APICLIENT", loggedUser, transcriptionId)
  }, []);
  return null;
}

export default ApiClient;
