import React, { useEffect, useState } from "react";
import Default from "./DefaultPage";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";

function SavedAudioPage() {
    const [audioUrls, setAudioUrls] = useState([]);

    useEffect(() => {
        // Initialize an array to store the audio URLs
        const audioUrls = [];

        // Iterate through local storage keys
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            // Check if the key matches the pattern "audioUrlX" where X is a number
            if (/^audioUrl\d+$/.test(key)) {
                const audioUrl = localStorage.getItem(key);
                audioUrls.push(audioUrl);
            }
        }

        // Update the state with the retrieved audio URLs
        setAudioUrls(audioUrls);
    }, []); // The empty dependency array ensures this effect runs only once on component mount
    console.log(audioUrls);
    return (
        <Default>
            <div className="pt-5">
                <h1 className="text-white">Saved Audios</h1>
                <MDBRow className="pt-5">
                    <MDBCol xl={4} lg={6} className="mb-4 mx-auto">
                        {audioUrls.map((audioUrl, index) => (
                            <MDBCard>
                                <MDBCardBody className="bg-slate-950">
                                    <div className="p-3">
                                        <audio controls>
                                            <source
                                                src={audioUrl}
                                                type="audio/mpeg"
                                            />
                                        </audio>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        ))}
                    </MDBCol>
                </MDBRow>
            </div>
            <div className="py-20"></div>
        </Default>
    );
}

export default SavedAudioPage;
