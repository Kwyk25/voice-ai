import React, { useEffect } from "react";
import ApiClient from "../api/apiCreateNew";
import Default from "./DefaultPage";

export default function TestApi() {
  

  const handleSubmit = (e) => {
    console.log("EFFECT RAN");
    ApiClient({
      voice: "larry",
      text: "Hello",
      speed: 1,
      title: "Finsihed Audio",
    });
    console.log("EFFECT RAN SUCCESFULLY");
  };

  return (
      <div style={{width: '100%', height: "auto"}}>
      <button onClick={handleSubmit}>Submit</button>
      </div>
  );
}
