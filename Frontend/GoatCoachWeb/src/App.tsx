import { isMobile } from "react-device-detect";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ErrorWeb } from "./pages/ErrorWeb";
import { HomePage } from "./pages/HomePage";
import { LoginPagePresentation as Login } from "./pages/LoginPage/LoginPagePresentation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isMobile ? <HomePage /> : <ErrorWeb />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
