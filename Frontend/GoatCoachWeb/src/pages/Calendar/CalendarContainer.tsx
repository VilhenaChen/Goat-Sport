import { memo, useCallback, useState } from "react";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../hooks/useVerifyUserLogin";
import { EventType, GameLocationEnum } from "../../utils/utils";
import CalendarPresentation from "./CalendarPresentation";

const CalendarContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const [tabChosen, setTabChosen] = useState<string>("Upcomming Events");

  const handleClickTab = useCallback((tab: string) => {
    setTabChosen(tab);
  }, []);

  return (
    <CalendarPresentation
      tabs={["Upcomming Events", "Past Events"]}
      activeTab={tabChosen}
      onTabClick={handleClickTab}
      upcommingEvents={[
        {
          month: "MAI",
          events: [
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
          ],
        },
        {
          month: "JUN",
          events: [
            {
              day: 9,
              month: "JUN",
              title: "Preparação Jogo",
              eventType: EventType.PRACTICE,
            },
            {
              day: 10,
              month: "JUN",
              title: "Benfica",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
        {
          month: "JUL",
          events: [
            {
              day: 4,
              month: "JUL",
              title: "Cova da Piedade",
              gameLocation: GameLocationEnum.AWAY,
              eventType: EventType.GAME,
            },
          ],
        },
      ]}
      pastEvents={[
        {
          month: "MAR",
          events: [
            {
              day: 30,
              month: "MAR",
              title: "Covilhã",
              gameLocation: GameLocationEnum.AWAY,
              eventType: EventType.GAME,
            },
            {
              day: 15,
              month: "MAR",
              title: "Treino de Guarda Redes",
              eventType: EventType.PRACTICE,
            },
          ],
        },
        {
          month: "FEV",
          events: [
            {
              day: 9,
              month: "JUN",
              title: "Preparação Jogo",
              eventType: EventType.PRACTICE,
            },
            {
              day: 10,
              month: "JUN",
              title: "Braga B",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
        {
          month: "JAN",
          events: [
            {
              day: 18,
              month: "JAN",
              title: "Santa Clara",
              gameLocation: GameLocationEnum.AWAY,
              eventType: EventType.GAME,
            },
          ],
        },
      ]}
    />
  );
});

export default CalendarContainer;
