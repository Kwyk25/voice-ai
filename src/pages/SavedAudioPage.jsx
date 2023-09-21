import React, { useEffect, useState } from "react";
import Default from "./DefaultPage";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { supabase } from "../supabaseClient";

function SavedAudioPage() {
  const [audioFiles, setAudioFiles] = useState([]);

  function isVoiceURL(input) {
    return input.startsWith("s3://");
  }

  function capitalizeAndReplaceDashes(input) {
    // Split the input by dashes and capitalize the first letter of each word
    const words = input
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words with spaces
    return words.join(" ");
  }

  // Function to extract the voice name from the URL
  function extractVoiceNameFromURL(url) {
    // Assuming that the voice name is right before "/manifest.json" in the URL
    const match = url.match(/\/([^/]+)\/manifest\.json$/);
    if (match && match[1]) {
      return capitalizeAndReplaceDashes(match[1]);
    }
    // If no match is found, return the original URL
    return url;
  }

  useEffect(() => {
    // Initialize an array to store the audio URLs
    const audioFiles = [];

    // Iterate through local storage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key matches the pattern "audioUrlX" where X is a number
      if (/^audioFile\d+$/.test(key)) {
        const audioFileString = localStorage.getItem(key);
        const audioFileObject = JSON.parse(audioFileString);
        audioFiles.push(audioFileObject);
      }
    }

    // Update the state with the retrieved audio URLs
    setAudioFiles(audioFiles);
  }, []); // The empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    console.log(audioFiles);
  }, [audioFiles]);

  function removeFromLocalStorage(id) {
    // Find the audio file with the specified ID in the audioFiles state
    const audioFileIndexToRemove = audioFiles.findIndex((audioFile) => audioFile.id === id);
    console.log(audioFileIndexToRemove);
    // Check if the audio file was found
    if (audioFileIndexToRemove !== -1) {
      // Construct the key for the audio file using the found input ID
      const key = `audioFile${audioFileIndexToRemove}`;
      console.log("key", key);
      // Check if the key exists in local storage
      if (localStorage.getItem(key)) {
        // Remove the key from local storage
        localStorage.removeItem(key);
      }
  
      // Update the state with the updated audio files
      setAudioFiles((prevAudioFiles) =>
        prevAudioFiles.filter((audioFile) => audioFile.input.id !== id)
      );
    }
  }

  async function removeFromDataBase(id) {
    try {
      // Use Supabase to delete the item from the database
      const { error } = await supabase
        .from("Transcription")
        .delete()
        .eq("newTranscription", id); 

      if (error) {
        console.error("Error deleting item from the database:", error);
        return;
      }
    } catch (error) {
      console.error("Error handling delete:", error);
    }
  }

  async function handleDelete(id) {
    // Prompt the user for confirmation
    const confirmed = window.confirm("Are you sure you want to delete this? This action is irreversible.");
  
    if (confirmed) {
      removeFromLocalStorage(id);
      removeFromDataBase(id);
  
      // Update the state with the updated audio files
      setAudioFiles((prevAudioFiles) =>
        prevAudioFiles.filter((audioFile) => audioFile.id !== id)
      );
    }
  }

  return (
    <Default>
      <div className="pt-5">
        <h1 className="text-white">Saved Audios</h1>
        <div className="container mt-4 mb-4">
          <MDBRow>
            {audioFiles.map((audioFile, index) => (
              <MDBCol
                xl={4}
                lg={4}
                md={6} // Adjusted column size to create 2 columns on larger screens
                sm={6}
                xs={12}
                key={index}
                className="mb-4"
              >
                <MDBCard>
                  <MDBCardBody className="bg-slate-950 text-center">
                    <div className="p-3">
                      <h3 className="text-white">
                        Voice:{" "}
                        {isVoiceURL(audioFile.input.voice)
                          ? extractVoiceNameFromURL(audioFile.input.voice)
                          : audioFile.input.voice}
                      </h3>
                      {audioFile.output && audioFile.output.url ? (
                        <audio controls style={{ width: "100%" }}>
                          <source
                            src={audioFile.output.url}
                            type="audio/mpeg"
                          />
                        </audio>
                      ) : (
                        <p>No audio available</p>
                      )}
                      <h3 className="text-white">"{audioFile.input.text}"</h3>
                    </div>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(audioFile.id)}
                    >
                      Delete
                    </button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      </div>
      <div className="py-20"></div>
    </Default>
  );
}

export default SavedAudioPage;
