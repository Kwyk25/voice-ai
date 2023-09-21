import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import apiClientLogic from "../api/apiClientLogic";
import { supabase } from "../supabaseClient";
import ArticleStatus from "../api/apiReadTransribed";

function InputText({ selectedVoice, onSelectedVoiceChange }) {
  const [inputPrompt, setInputPrompt] = useState("GOODBYE");
  const [inputTitle, setInputTitle] = useState("TEST");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  console.log(selectedVoice);

  function handleVoiceSelection(voiceId) {
    onSelectedVoiceChange(voiceId);
  }

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handlePromptChange = (e) => {
    setInputPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      const { transcriptionId, loggedUser } = await apiClientLogic(
        selectedVoice,
        inputPrompt,
        1,
        inputTitle
      );
      setIsSubmitted(true);

      if (transcriptionId && loggedUser) {
        setIsSubmitted(true);
        await insertDataToDatabase(transcriptionId, loggedUser);
      } else {
        console.error("Transcription ID or loggedUser is missing.");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  const insertDataToDatabase = async (transcriptionId, loggedUser) => {
    try {
      const { data, error } = await supabase
        .from("Transcription")
        .upsert([
          {
            newTranscription: transcriptionId,
            userId: loggedUser,
          },
        ])
        .select();
  
      if (error) {
        console.error("Error inserting data:", error.message);
      } else {
        console.log("Data inserted successfully:", data);
      }
    } catch (err) {
      console.error("An error occurred during data insertion:", err);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
        window.location.href = "/SavedAudioPage";
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    // Display a loading message or spinner while waiting to redirect
    return (
      <div>
        <p>Redirecting...</p>
        {/* You can optionally include a loading spinner or message */}
      </div>
    );
  }

  console.log(
    `Form Data\nInput Prompt ${inputPrompt}\nInput Title ${inputTitle}\nSelected Voice ${selectedVoice}`
  );

  return (
    <div>
      <h3 className="text-white">Generate your Ai</h3>
      <Form.Group className="mb-3">
        <Form.Label className="text-white"> Title</Form.Label>
        <Form.Control
          placeholder="Im Your Audio Title"
          value={inputTitle}
          onChange={handleTitleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-white"> input prompt</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Welcome to bobs burgers!"
          value={inputPrompt}
          onChange={handlePromptChange}
        />
      </Form.Group>
      <Button onClick={handleSubmit}>Generate Prompt</Button>
    </div>
  );
}

export default InputText;
