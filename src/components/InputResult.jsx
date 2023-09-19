import { useState, useEffect } from "react";
import languageArray from "../data/languagesAndCodes";
import { PlayBtn, PauseBtn } from "react-bootstrap-icons";
import InputText from "./InputText";

function InputResult({ selectedVoice, onSelectedVoiceChange }) {
  const [voices, setVoices] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingList, setIsPlayingList] = useState([]);
  const voicesPerPage = 7;

  async function getVoices() {
    try {
      const response = await fetch(
        "http://localhost:4005/api/playht/ultraRealisticVoices"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setVoices(data);
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  }

  useEffect(() => {
    getVoices();
  }, []);

  useEffect(() => {
    // Initialize isPlayingList with false values for each voice
    if (voices) {
      setIsPlayingList(new Array(voices.length).fill(false));
    }
  }, [voices]);

  function playVoiceSample(sampleUrl, index) {
    if (currentAudio && !currentAudio.paused) {
      // If there's a current audio and it's playing, pause it
      currentAudio.pause();
      setIsPlayingList((prevIsPlayingList) =>
        prevIsPlayingList.map((_, i) =>
          i === index ? false : prevIsPlayingList[i]
        )
      );
      setIsPlaying(false); // Update isPlaying state
    } else {
      if (currentAudio && currentAudio.paused) {
        // If there's a current audio and it's paused, resume playing
        currentAudio.play();
        setIsPlayingList((prevIsPlayingList) =>
          prevIsPlayingList.map((_, i) => (i === index ? true : false))
        );
        setIsPlaying(true); // Update isPlaying state
      } else {
        // If there's no current audio or it's paused, create and play the new audio
        const audio = new Audio(sampleUrl);

        audio.onended = () => {
          // When the audio ends, reset the play state
          setIsPlayingList((prevIsPlayingList) =>
            prevIsPlayingList.map((_, i) =>
              i === index ? false : prevIsPlayingList[i]
            )
          );
          setIsPlaying(false); // Update isPlaying state
        };

        audio
          .play()
          .then(() => {
            setIsPlayingList((prevIsPlayingList) =>
              prevIsPlayingList.map((_, i) => (i === index ? true : false))
            );
            setIsPlaying(true);
          })
          .catch((error) => {
            // Handle any errors that occur during playback
            console.error("Error playing audio:", error);
            setIsPlaying(false); // Ensure isPlaying is updated if there's an error
          });

        // Pause the currently playing audio, if any
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0; // Rewind to the beginning
        }

        setCurrentAudio(audio);
      }
    }
  }

  function handleVoiceSelection(voiceId) {
    onSelectedVoiceChange(voiceId);
  }

  // Function to get the voices for the current page
  const getCurrentPageVoices = () => {
    const indexOfLastVoice = currentPage * voicesPerPage;
    const indexOfFirstVoice = indexOfLastVoice - voicesPerPage;
    return voices ? voices.slice(indexOfFirstVoice, indexOfLastVoice) : [];
  };

  // Calculate the total number of pages
  const totalPages = voices
    ? Math.ceil((voices.length || 0) / voicesPerPage)
    : 0;

  // Calculate the range of visible page numbers (always 9 buttons)
  const visiblePageNumbers = [];
  const numberOfVisiblePages = 9;

  // Calculate the start and end page numbers for the visible buttons
  let startPage = currentPage - Math.floor(numberOfVisiblePages / 2);
  let endPage = currentPage + Math.floor(numberOfVisiblePages / 2);

  // Ensure that the start and end page numbers are within bounds
  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, numberOfVisiblePages);
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - numberOfVisiblePages + 1);
  }

  if (endPage - startPage < numberOfVisiblePages - 1) {
    // Adjust the start and end pages to have exactly numberOfVisiblePages
    if (endPage === totalPages) {
      startPage = totalPages - numberOfVisiblePages + 1;
    } else {
      endPage = startPage + numberOfVisiblePages - 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      setCurrentPage(totalPages); // If on the first page, go to the last page
    } else if (newPage > totalPages) {
      setCurrentPage(1); // If on the last page, go to the first page
    } else {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <h3>Voice List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Language</th>
            <th>Voice Samples</th>
            <th>Use Voice</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageVoices().map((voice, index) => (
            <tr
              key={index}
              className={voice.name === selectedVoice ? "table-active" : ""}
            >
              <td>{voice.name}</td>
              <td>{voice.language}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => playVoiceSample(voice.sample, index)}
                >
                  {isPlayingList[index] ? <PauseBtn /> : <PlayBtn />}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleVoiceSelection(voice.name)}
                >
                  Use
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="ml-10">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {"<"}
            </button>
          </li>
          {visiblePageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                currentPage === pageNumber ? "active" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(pageNumber)}
                style={{ width: "40px" }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InputResult;
