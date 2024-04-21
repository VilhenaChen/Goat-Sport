import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../hooks/useVerifyUserLogin";
import { userActions } from "../../store/userSlice";
import { ChooseSportPresentation } from "./ChooseSportsPresentation";

export const ChooseSportsContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSportSelection = () => {
    dispatch(userActions.changeSport({ chosenSport: "Football" }));
    navigate("/");
  };

  return (
    <ChooseSportPresentation handleSportSelection={handleSportSelection} />
  );
});
