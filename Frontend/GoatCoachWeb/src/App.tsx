import { isMobile } from "react-device-detect";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { ErrorWeb } from "./pages/ErrorWeb";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isMobile ? <HomePage /> : <ErrorWeb />} />
      </Routes>
    </Router>
  );
}

export default App;
