import React, { useEffect } from "react";
import ApiClient from "../api/apiCreateNew";

export default function TestApi() {
    console.log("EFFECT RAN");
    ApiClient({
      voice: "s3://voice-cloning-zero-shot/ddff0ce5-14c7-43bd-9e17-914b321e888a/evan-howard/manifest.json",
      text: "Hello this is Evan Howard",
      speed: 1,
      title: "Finsihed Audio",
    });
    console.log("EFFECT RAN SUCCESFULLY");
    //HVBePz0RXNybyg4lPO
    //data: {"id":"HVBePz0RXNybyg4lPO","progress":1,"stage":"complete","url":"https://peregrine-results.s3.amazonaws.com/pigeon/HVBePz0RXNybyg4lPO_0.mp3","duration":1.3867,"size":29325}

  return (
      <div>
        <h2>This is a testing route</h2>
      </div>
  );
}
