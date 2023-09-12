import "../App.css"
import Default from "./DefaultPage";
import Header from "../components/headerLogo";
import PlayBtn from "../components/ExamplesAi";

export default function HomePage() {
    return (
        <Default>
            <div>
                <Header />
                <h2 >Here some examples</h2>
                <PlayBtn/>
            </div>
        </Default>
    );
}