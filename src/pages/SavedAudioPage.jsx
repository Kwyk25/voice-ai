import React, { useEffect, useState } from "react";
import Default from "./DefaultPage";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";

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
                <audio
                  controls
                  style={{width: '100%'}}
                >
                  <source src={audioFile.output.url} type="audio/mpeg" />
                </audio>
                <h3 className="text-white">"{audioFile.input.text}"</h3>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  </div>
</div>
<div className="py-20"></div>
<div className="py-20"></div>
<div className="py-20"></div>


    </Default>
  );
}

export default SavedAudioPage;
