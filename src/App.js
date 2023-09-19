import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {TestApi, HomePage, CreditShop, LoginPage, SignUpPage, TtsAiPage, Error404Page, CheckoutPage, Settings} from './pages'
import CreateNewVoice from "./api/apiCreateNewVoices";
import { useEffect, useState } from "react";
import ArticleStatus from "./api/apiReadTransribed";
import ListCustomeVoices from "./api/apiListOurVoices";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/CreditShop" element={<CreditShop />} />
          <Route
            path="/LoginPage"
            element={<LoginPage setToken={setToken} />}
          />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/TtsAiPage" element={<TtsAiPage />} />
          <Route path="/TESTAPI" element={<TestApi/>} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/createVoice" element={<CreateNewVoice/>} />
          <Route path="/loadTranscripe" element={<ArticleStatus/>} />
          <Route path="/ListVoices" element={<ListCustomeVoices/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
