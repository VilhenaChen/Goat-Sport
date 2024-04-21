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
      pastEvents={[
        {
          month: "MAI",
          events: [
            {
              day: 18,
              month: "MAI",
              title: "Portimonense",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
            {
              day: 18,
              month: "MAI",
              title: "Portimonense",
              gameLocation: GameLocationEnum.AWAY,
              eventType: EventType.GAME,
            },
            {
              day: 18,
              month: "MAI",
              title: "Sporting",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
        {
          month: "MAI",
          events: [
            {
              day: 26,
              month: "MAI",
              title: "Porto",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
        {
          month: "MAI",
          events: [
            {
              day: 31,
              month: "MAI",
              title: "Benfica",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
      ].reverse()}
      upcommingEvents={[
        {
          month: "MAI",
          events: [
            {
              day: 18,
              month: "MAI",
              title: "Portimonense",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
            {
              day: 18,
              month: "MAI",
              title: "Portimonense",
              gameLocation: GameLocationEnum.AWAY,
              eventType: EventType.GAME,
            },
            {
              day: 18,
              month: "MAI",
              title: "Sporting",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
        {
          month: "MAI",
          events: [
            {
              day: 26,
              month: "MAI",
              title: "Treino de pernas",
              eventType: EventType.PRACTICE,
            },
          ],
        },
        {
          month: "MAI",
          events: [
            {
              day: 31,
              month: "MAI",
              title: "Benfica",
              gameLocation: GameLocationEnum.HOME,
              eventType: EventType.GAME,
            },
          ],
        },
      ]}
    />
  );
});

export default CalendarContainer;
