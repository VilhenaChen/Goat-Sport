import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { DashboardContainer as Dashboard } from "./pages/Dashboard/DashboardContainer";
import { ErrorWeb } from "./pages/ErrorWeb/ErrorWeb";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPagePresentation as Login } from "./pages/LoginPage/LoginPagePresentation";
import { RegisterPagePresentation as Register } from "./pages/RegisterPage/RegisterPagePresentation";
import { useAppSelector } from "./store";

function App() {
  const isLoggedIn = useAppSelector((state) => state.loggedIn);
  const isSportChosen = useAppSelector((state) => state.chosenSport);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isSportChosen ? <Dashboard /> : <HomePage />}
        />
        <Route path="/error-web" element={<ErrorWeb />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login /> : <Navigate replace to="/" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <Register /> : <Navigate replace to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
