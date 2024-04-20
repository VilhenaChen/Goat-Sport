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
          title: "Porto",
          gameLocation: GameLocationEnum.HOME,
          day: 10,
          month: "MAI",
          eventType: EventType.Game,
        },
        {
          title: "Treino de Atacantes",
          day: 31,
          month: "MAI",
          eventType: EventType.Practice,
        },
        {
          title: "Porto",
          gameLocation: GameLocationEnum.AWAY,
          day: 4,
          month: "JUN",
          eventType: EventType.Game,
        },
      ]}
    />
  );
});
