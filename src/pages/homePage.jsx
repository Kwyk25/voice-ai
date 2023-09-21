import "../App.css";
import Default from "./DefaultPage";
import Header from "../components/headerLogo";
import PlayBtn from "../components/ExamplesAi";
import HomeInfo from "../components/HomeInfo";

export default function HomePage() {
    return (
        <Default>
            <div>
                <Header />
                <h2 className="text-white">
                    Here some examples of voices you can try!
                </h2>
                <PlayBtn />
                <div className="my-5">
                    <HomeInfo />
                </div>
            </div>
        </Default>
    );
}
