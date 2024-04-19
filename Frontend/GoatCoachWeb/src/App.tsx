import { isMobile } from "react-device-detect";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { DashboardContainer as Dashboard } from "./pages/Dashboard/DashboardContainer";
import { ErrorWeb } from "./pages/ErrorWeb/ErrorWeb";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPagePresentation as Login } from "./pages/LoginPage/LoginPagePresentation";
import { useAppSelector } from "./store";

function App() {
  const isLoggedIn = useAppSelector((state) => state.loggedIn);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isMobile ? isLoggedIn ? <Dashboard /> : <HomePage /> : <ErrorWeb />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
