import { useState, useEffect } from "react";
import languageArray from "../data/languagesAndCodes";
import { PlayBtn, PauseBtn } from "react-bootstrap-icons";

function InputResult() {
  const [voices, setVoices] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingList, setIsPlayingList] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const voicesPerPage = 7;
  console.log(languageArray);
  async function getVoices() {
    try {
      const secretKey = process.env.REACT_APP_PLAYHT_API_KEY;
      const userId = process.env.REACT_APP_PLAYHT_API_ID;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: secretKey,
          "X-User-Id": userId,
        },
      };

      const response = await fetch("https://play.ht/api/v1/getVoices", options);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      setVoices(responseData);
      console.log(responseData);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getVoices();
    // Initialize isPlayingList with false values for each voice
    if (voices && voices.voices) {
      setIsPlayingList(new Array(voices.voices.length).fill(false));
    }
  }, []);

  function playVoiceSample(sampleUrl, index) {
    if (currentAudio) {
      // Pause the currently playing audio
      currentAudio.pause();
      currentAudio.currentTime = 0; // Rewind to the beginning
      // Update the play/pause state for the previously playing audio
      setIsPlayingList((prevIsPlayingList) =>
        prevIsPlayingList.map((_, i) =>
          i === index ? false : prevIsPlayingList[i]
        )
      );
      setIsPlaying(false);
    }

    const audio = new Audio(sampleUrl);

    if (!isPlayingList[index]) {
      // Play the audio
      audio.play().then(() => {
        setIsPlayingList((prevIsPlayingList) =>
          prevIsPlayingList.map((_, i) => (i === index ? true : false))
        );
        setIsPlaying(true);
      });
    } else {
      // Pause the audio
      audio.pause();
      // Update the play/pause state
      setIsPlaying(false);
      setIsPlayingList((prevIsPlayingList) =>
        prevIsPlayingList.map((_, i) =>
          i === index ? false : prevIsPlayingList[i]
        )
      );
    }

    setCurrentAudio(audio);
  }

  function selectedVoice() {
    //TODO
  }

  const filteredVoices = voices?.voices.filter(
    (voice) => !selectedLanguage || voice.languageCode === selectedLanguage
  );

  // Calculate the range of voices to display on the current page
  const indexOfLastVoice = currentPage * voicesPerPage;
  const indexOfFirstVoice = indexOfLastVoice - voicesPerPage;
  const currentVoices = filteredVoices?.slice(
    indexOfFirstVoice,
    indexOfLastVoice
  );

  const totalPages = Math.ceil((voices?.voices.length || 0) / voicesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1) {
      setCurrentPage(totalPages); // If on the first page, go to the last page
    } else if (newPage > totalPages) {
      setCurrentPage(1); // If on the last page, go to the first page
    } else {
      setCurrentPage(newPage);
    }
  };

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

  return (
    <div>
      <h3>Voice List</h3>
      <div>
        <label htmlFor="languageFilter">Filter by Language: </label>
        <select
          id="languageFilter"
          onChange={(e) => setSelectedLanguage(e.target.value)}
          value={selectedLanguage}
        >
          <option value="">All</option>
          {languageArray.map((languageObj) => (
            <option value={languageObj.languageCode}>
              {languageObj.language}
            </option>
          ))}
        </select>
      </div>
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
          {currentVoices ? (
            currentVoices.map((voice, index) => (
              <tr key={index}>
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
                    onClick={() => selectedVoice(voice.id)}
                  >
                    Use
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
      <nav className="ml-10">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 5)}
            >
              {"<<"}
            </button>
          </li>
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
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 5)}
            >
              {">>"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default InputResult;
