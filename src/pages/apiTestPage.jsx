import React, { useEffect } from "react";
import ApiClient from "../api/apiCreateNew";
import Default from "./DefaultPage";

export default function TestApi() {
    console.log("EFFECT RAN")
    ApiClient({
      voice: "larry",
      text: "Hello",
      speed: 1,
      title: "Finsihed Audio",
    });
    console.log("EFFECT RAN SUCCESFULLY")


  return <Default></Default>;
}
