import { memo } from "react";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../hooks/useVerifyUserLogin";
import { EventType, GameLocationEnum } from "../../utils/utils";
import { DashboardPresentation } from "./DashboardPresentation";

export const DashboardContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();
  return (
    <DashboardPresentation
      coachName="Roger Shmaite"
      teamName="Académica"
      sport="Futebol"
      punishments={10}
      injuries={20}
      nextEvents={[
        {
          day: 18,
          month: "MAI",
          title: "Porto B",
          gameLocation: GameLocationEnum.HOME,
          eventType: EventType.GAME,
        },
        {
          day: 24,
          month: "MAI",
          title: "Treino de Atacantes",
          eventType: EventType.PRACTICE,
        },
        {
          day: 31,
          month: "MAI",
          title: "Sporting",
          gameLocation: GameLocationEnum.AWAY,
          eventType: EventType.GAME,
        },
      ]}
    />
  );
});
