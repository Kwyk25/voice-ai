import "../App.css"
import Default from "./DefaultPage";
import InfoCard from "../components/InfoCard";

export default function TtsAiPage() {
    return (
        <Default>
            <div className="pt-5">
                <h2 className="text-white">Ai model</h2>
                <div>
                    <h2 className="text-white">How to use the ai voice</h2>
                    <InfoCard />
                </div>
            </div>
        </Default>
    );
}