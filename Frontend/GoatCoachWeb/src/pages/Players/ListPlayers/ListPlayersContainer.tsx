import { memo } from "react";
import { useVerifyMobileView } from "../../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../../hooks/useVerifyUserLogin";
import { EventType, GameLocationEnum } from "../../../utils/utils";
import { ListPlayersPresentation } from "./ListPlayersPresentation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../../store/userSlice";

export const ListPlayersContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const navigate = useNavigate();

  const handlePlayerCreation = ()=>{
    //TODO
    
    navigate("/players/create");
  }

  return (
    <ListPlayersPresentation handlePlayerCreation={handlePlayerCreation}
    />
  );
});
