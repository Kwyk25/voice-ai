import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import CreditShop from "./pages/CreditShop";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/CreditShop" element={<CreditShop />} />
                    <Route path="/LoginPage" element={<LoginPage />} />
                    <Route path="/SignUpPage" element={<SignUpPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;