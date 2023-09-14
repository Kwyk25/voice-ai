import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreditShop from "./pages/CreditShop";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TtsAiPage from "./pages/TtsAiPage";
import Error404Page from "./pages/Error404Page";
import CheckoutPage from "./pages/CheckoutPage";
import { useEffect, useState } from "react";

function App() {
  const [token, setToken] = useState(false);
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<Error404Page />} />
          {token?<Route path="/" element={<HomePage />} />:""}
          <Route path="/CreditShop" element={<CreditShop />} />
          <Route
            path="/LoginPage"
            element={<LoginPage setToken={setToken} />}
          />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/TtsAiPage" element={<TtsAiPage />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
