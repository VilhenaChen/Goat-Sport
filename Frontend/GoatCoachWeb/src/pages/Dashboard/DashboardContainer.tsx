import { memo } from "react";
import { EventType, GameLocationEnum } from "../../utils/utils";
import { DashboardPresentation } from "./DashboardPresentation";

export const DashboardContainer = memo(() => {
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
          subtitle: GameLocationEnum.HOME,
          day: 10,
          month: "Maio",
          eventType: EventType.Game,
        },
        {
          title: "Treino de Atacantes",
          day: 31,
          month: "Maio",
          eventType: EventType.Practice,
        },
        {
          title: "Porto",
          subtitle: GameLocationEnum.AWAY,
          day: 4,
          month: "Junho",
          eventType: EventType.Game,
        },
      ]}
    />
  );
});
