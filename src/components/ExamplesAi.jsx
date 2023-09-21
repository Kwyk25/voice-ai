import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { PlayCircleFill, PauseCircleFill } from "react-bootstrap-icons";
import { Link as RouterLink } from "react-router-dom";

const audioData = [
  {
    name: "Evan Howard",
    url: "https://peregrine-results.s3.amazonaws.com/pigeon/wQ6ZI6ZFU9msO8Kn4B_0.wav",
  },
  {
    name: "Elon Musk",
    url: "https://peregrine-results.s3.amazonaws.com/pigeon/vucxbibY2u74vRnzNn_0.wav",
  },
  {
    name: "Barack Obama",
    url: "https://peregrine-results.s3.amazonaws.com/pigeon/Qoj88rlnJF2nJ7qzvr_0.wav",
  },
  {
    name: "Donald Trump",
    url: "https://peregrine-results.s3.amazonaws.com/pigeon/ztigCDV9cHgBxgw5AB_0.wav",
  },
];

export default function PlayBtn() {
  const [audioPlayers, setAudioPlayers] = useState(
    audioData.map(({ url }) => new Audio(url))
  );
  const [playingIndex, setPlayingIndex] = useState(-1);

  const toggleAudio = (index) => {
    if (index === playingIndex) {
      // Clicked on the same voice, pause it
      audioPlayers[index].pause();
      setPlayingIndex(-1);
    } else {
      // Clicked on a different voice or for the first time, play it
      if (playingIndex !== -1) {
        // Pause the currently playing audio
        audioPlayers[playingIndex].pause();
      }
      audioPlayers[index].play();
      setPlayingIndex(index);
    }
  };

  return (
    <ButtonGroup className="my-4">
      {audioData.map(({ name }, index) => (
        <Button
          key={index}
          onClick={() => toggleAudio(index)}
        >
          {index === playingIndex ? <PauseCircleFill /> : <PlayCircleFill />}{" "}
          {name}
        </Button>
      ))}
    </ButtonGroup>
  );
}
