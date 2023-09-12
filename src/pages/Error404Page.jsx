import "../App.css"
import Default from "./DefaultPage";

export default function Error404Page() {
    return (
      <Default>
        <div className="bg-slate-900" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div>
            <h2 className="error404 text-center">ERROR 404</h2>
            <h2 className="error404 text-center">Sorry, the page you are trying to reach is unavailable.</h2> <br />
            <img src="./robot.jpeg" alt="AI VOICE 404" style={{ display: "block", margin: "0 auto" }} />
          </div>
        </div>
      </Default>
    );
  }