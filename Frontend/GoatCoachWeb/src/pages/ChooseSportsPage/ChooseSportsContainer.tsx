import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import { ChooseSportPresentation } from "./ChooseSportsPresentation";

export const ChooseSportsContainer = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSportSelection = () => {
    //TODO
    dispatch(userActions.changeSport({ chosenSport: "Football" }));
    navigate("/");
  };

  return (
    <ChooseSportPresentation handleSportSelection={handleSportSelection} />
  );
});
