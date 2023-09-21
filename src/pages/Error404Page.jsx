import "../App.css";
import Default from "./DefaultPage";
import error404 from "../assets/images/404.jpg";

export default function Error404Page() {
    return (
        <Default>
            <div
                className="bg-slate-90"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <div>
                    <h1 className="text-white">ERROR 404</h1>
                    <h2 className="text-white">
                        Sorry, the page you are trying to reach is unavailable.
                    </h2>{" "}
                    <br />
                   </div>
                 <img
                        src={error404}
                        alt="AI VOICE 404"
                        style={{ display: "block", margin: "0 auto" }}
                    />
            </div>
        </Default>
    );
}
