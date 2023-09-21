import { useState, useEffect } from "react";
import { PlayBtn, PauseBtn } from "react-bootstrap-icons";
import InputText from "./InputText";

function InputResult({ selectedVoice, onSelectedVoiceChange }) {
  const [predefinedVoices, setPredefinedVoices] = useState(null);
  const [customVoices, setCustomVoices] = useState(null);
  const [displayedVoices, setDisplayedVoices] = useState(predefinedVoices);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingList, setIsPlayingList] = useState([]);
  const voicesPerPage = 7;

  async function getVoices() {
    try {
      const predefinedResponse = await fetch(
        "http://localhost:4005/api/playht/ultraRealisticVoices"
      );
      if (!predefinedResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const predefinedData = await predefinedResponse.json();
      setPredefinedVoices(predefinedData);
  
      // Fetch custom voices here and set them in customVoices state
      const customResponse = await fetch(
        "http://localhost:4005/api/playht/listCustomVoice"
      );
      if (!customResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const customData = await customResponse.json();
      setCustomVoices(customData);
  
      // Set displayedVoices to predefinedVoices after both predefined and custom voices are fetched
      setDisplayedVoices(predefinedData);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getVoices();
  }, []);
  

  useEffect(() => {
    console.log("CUSTOM VOICES", customVoices);
    console.log("PREDEFINED VOICES", predefinedVoices);
  }, [customVoices, predefinedVoices]);

  function toggleCustomVoices() {
    const newDisplayedVoices =
      displayedVoices === predefinedVoices ? customVoices : predefinedVoices;
    setDisplayedVoices(newDisplayedVoices);
  }

  useEffect(() => {
    // Initialize isPlayingList with false values for each voice
    if (displayedVoices) {
      setIsPlayingList(new Array(displayedVoices.length).fill(false));
    }
  }, [displayedVoices]);

  function playVoiceSample(sampleUrl, index) {
    if (currentAudio) {
      if (currentAudio.paused) {
        // If there's a current audio and it's paused, resume playing
        currentAudio.play();
      } else if (index !== currentAudio.index) {
        // If there's a current audio and it's not the same as the clicked one, pause it
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to the beginning

        // Create and play the new audio
        const audio = new Audio(sampleUrl);
        audio.index = index; // Set the index of the audio

        audio.onended = () => {
          // When the audio ends, reset the play state
          setIsPlayingList((prevIsPlayingList) =>
            prevIsPlayingList.map((_, i) =>
              i === index ? false : prevIsPlayingList[i]
            )
          );
          setIsPlaying(false); // Update isPlaying state
          setCurrentAudio(null); // Reset currentAudio to null
        };

        audio
          .play()
          .then(() => {
            setIsPlayingList((prevIsPlayingList) =>
              prevIsPlayingList.map((_, i) => (i === index ? true : false))
            );
            setIsPlaying(true);
            setCurrentAudio(audio); // Set the new currentAudio
          })
          .catch((error) => {
            // Handle any errors that occur during playback
            console.error("Error playing audio:", error);
            setIsPlaying(false); // Ensure isPlaying is updated if there's an error
            setCurrentAudio(null); // Reset currentAudio to null on error
          });
      } else {
        // If there's a current audio and it's the same as the clicked one, pause it
        currentAudio.pause();
        setIsPlayingList((prevIsPlayingList) =>
          prevIsPlayingList.map((_, i) =>
            i === index ? false : prevIsPlayingList[i]
          )
        );
        setIsPlaying(false); // Update isPlaying state
        setCurrentAudio(null); // Reset currentAudio to null
      }
    } else {
      // If there's no current audio, create and play the new audio
      const audio = new Audio(sampleUrl);
      audio.index = index; // Set the index of the audio

      audio.onended = () => {
        // When the audio ends, reset the play state
        setIsPlayingList((prevIsPlayingList) =>
          prevIsPlayingList.map((_, i) =>
            i === index ? false : prevIsPlayingList[i]
          )
        );
        setIsPlaying(false); // Update isPlaying state
        setCurrentAudio(null); // Reset currentAudio to null
      };

      audio
        .play()
        .then(() => {
          setIsPlayingList((prevIsPlayingList) =>
            prevIsPlayingList.map((_, i) => (i === index ? true : false))
          );
          setIsPlaying(true);
          setCurrentAudio(audio); // Set the new currentAudio
        })
        .catch((error) => {
          // Handle any errors that occur during playback
          console.error("Error playing audio:", error);
          setIsPlaying(false); // Ensure isPlaying is updated if there's an error
          setCurrentAudio(null); // Reset currentAudio to null on error
        });
    }
  }

  function handleVoiceSelection(voiceId) {
    onSelectedVoiceChange(voiceId);
  }

  // Function to get the voices for the current page
  const getCurrentPageVoices = () => {
    const indexOfLastVoice = currentPage * voicesPerPage;
    const indexOfFirstVoice = indexOfLastVoice - voicesPerPage;
    return displayedVoices
      ? displayedVoices.slice(indexOfFirstVoice, indexOfLastVoice)
      : [];
  };

  // Calculate the total number of pages
  const totalPages = displayedVoices
    ? Math.ceil((displayedVoices.length || 0) / voicesPerPage)
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
      {customVoices && (
        <button className="btn btn-primary" onClick={toggleCustomVoices}>
          {displayedVoices === predefinedVoices
            ? "Try Custom Voices"
            : "Switch to Predefined Voices"}
        </button>
      )}
      {displayedVoices && (
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
                className={voice.id === selectedVoice ? "table-active" : ""}
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
                    onClick={() => handleVoiceSelection(voice.id)}
                  >
                    Use
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className>
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
