import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import { ChooseSportsContainer as ChooseSports } from "./pages/ChooseSportsPage/ChooseSportsContainer";
import { DashboardContainer as Dashboard } from "./pages/Dashboard/DashboardContainer";
import { ErrorWeb } from "./pages/ErrorWeb/ErrorWeb";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPageContainer as Login } from "./pages/LoginPage/LoginPageContainer";
import { RegisterPageContainer as Register } from "./pages/RegisterPage/RegisterPageContainer";
import UserProfile from "./pages/UserProfile/UserProfileContainer";
import { useAppSelector } from "./store";
import { ListPlayersContainer } from "./pages/Players/ListPlayers/ListPlayersContainer";

function App() {
  const isLoggedIn = useAppSelector((state) => state.loggedIn);
  const isSportChosen = useAppSelector((state) => state.chosenSport);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              isSportChosen ? (
                <Dashboard />
              ) : (
                <ChooseSports />
              )
            ) : (
              <HomePage />
            )
          }
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
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/players" element={<ListPlayersContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
