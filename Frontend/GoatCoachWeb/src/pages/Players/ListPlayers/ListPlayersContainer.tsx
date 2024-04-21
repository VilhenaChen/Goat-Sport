import { memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyMobileView } from "../../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../../hooks/useVerifyUserLogin";
import { PLAYERS } from "../../../utils/utils";
import { ListPlayersPresentation } from "./ListPlayersPresentation";

export const ListPlayersContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const navigate = useNavigate();
  const playersList = useMemo(() => PLAYERS, []);

  const handlePlayerCreation = () => {
    navigate("/players/create");
  };

  const onClickPlayer = (id: number) => {
    navigate(`/player/${id}`);
  };

  return (
    <ListPlayersPresentation
      handlePlayerCreation={handlePlayerCreation}
      playersList={playersList}
      onClickPlayer={onClickPlayer}
    />
  );
});
