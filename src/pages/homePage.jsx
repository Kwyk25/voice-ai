import "../App.css"
import Default from "./DefaultPage";
import Header from "../components/headerLogo";
import PlayBtn from "../components/ExamplesAi";
import CardVoices from "../components/CardVoices";
import CardVoices2 from "../components/CardVoices2";


export default function HomePage() {
    return (
        <Default>
            <div>
                <Header />
                <h2 className="text-white">Here some examples of voices you can try!</h2>
                <PlayBtn/>
                <h2 className="text-white mt-10">Commonly used voices</h2>
                <CardVoices />
                <CardVoices2 />
            </div>
        </Default>
    );
}