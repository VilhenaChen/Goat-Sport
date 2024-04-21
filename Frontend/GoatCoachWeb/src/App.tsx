import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import CalendarContainer from "./pages/Calendar/CalendarContainer";
import { ChooseSportsContainer as ChooseSports } from "./pages/ChooseSportsPage/ChooseSportsContainer";
import CreateEventContainer from "./pages/CreateEvent/CreateEventContainer";
import { DashboardContainer as Dashboard } from "./pages/Dashboard/DashboardContainer";
import { ErrorWeb } from "./pages/ErrorWeb/ErrorWeb";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPageContainer as Login } from "./pages/LoginPage/LoginPageContainer";
import { AddNoteContainer } from "./pages/Players/AddNote/AddNoteContainer";
import { PlayersDetailsContainer } from "./pages/Players/Details/PlayerDetailsContainer";
import { ListPlayersContainer } from "./pages/Players/ListPlayers/ListPlayersContainer";
import { RegisterPageContainer as Register } from "./pages/RegisterPage/RegisterPageContainer";
import UserProfile from "./pages/UserProfile/UserProfileContainer";
import { useAppSelector } from "./store";

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
        <Route path="/player/:id/edit" element={<ListPlayersContainer />} />
        //TODO
        <Route path="/player/:id/delete" element={<ListPlayersContainer />} />
        //TODO
        <Route path="/player/:id/note/create" element={<AddNoteContainer />} />
        //TODO
        <Route path="/player/:id" element={<PlayersDetailsContainer />} />{" "}
        //TODO
        <Route path="/player/:id" element={<ListPlayersContainer />} />
        <Route path="/player/create" element={<ListPlayersContainer />} />
        <Route
          path="/profile"
          element={
            isSportChosen ? <UserProfile /> : <Navigate replace to="/" />
          }
        />
        <Route
          path="/calendar"
          element={
            isSportChosen ? <CalendarContainer /> : <Navigate replace to="/" />
          }
        />
        <Route
          path="/create-event"
          element={
            isSportChosen ? (
              <CreateEventContainer />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
