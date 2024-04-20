import { memo } from "react";
import { ChooseSportPresentation } from "./ChooseSportsPresentation";
import { useAppSelector } from "../../store";

export const ChooseSportsContainer = memo(() => {
  const handleSportSelection = () => {
    //TODO
     useAppSelector((state) => state.loggedIn = (!state.loggedIn));
  };

  return <ChooseSportPresentation handleSportSelection={handleSportSelection} />;
});
