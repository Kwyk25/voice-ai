import "../App.css";
import Default from "./DefaultPage";
import InfoCard from "../components/InfoCard";
import InputText from "../components/InputText";
import InputResult from "../components/InputResult";

export default function TtsAiPage() {
    return (
        <Default>
            <div className="pt-5">
                <h1 className="text-white mb-5">Ai model</h1>
                <div className="pb-5">
                    <h2 className="text-white">How to use the ai voice</h2>
                    <InfoCard />
                </div>
                <div className="flex bg-gradient-to-tr from-pink-500 via-blue-800 to-cyan-500 rounded-lg  my-7 mb-5">
                    <div className="w-1/2 p-4">
                        <InputText />
                    </div>
                    <div className="w-1/2 p-4">
                        <InputResult />
                    </div>
                </div>
            </div>
        </Default>
    );
}
