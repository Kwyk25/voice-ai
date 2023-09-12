import "../App.css"
import Default from "./DefaultPage";

export default function Error404Page() {
    return (
      <Default>
        <div className="bg-slate-900" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <div>
            <h2 className="error404 text-center">Sorry, the page you are trying to reach is unavailable.</h2>
            <h2 className="error404 text-center">Error 404: Page not found</h2> <br />
          </div>
        </div>
      </Default>
    );
  }