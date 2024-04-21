import { Button, Typography, styled } from "@mui/material";
import { memo } from "react";
import { BottomMenu } from "../../components/BottomMenu";
import { CoachIcon } from "../../components/CoachIcon";
import EventCard, { EventCardProps } from "../../components/EventCard";
import { HeaderContainer } from "../../components/Header";
import TabsComponent from "../../components/TabsComponent";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "0px 36px 88px 36px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const EventsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const SectionTitle = styled(Typography)({
  "&&": { textAlign: "start" },
});

const CreateButton = styled(Button)({
  position: "fixed",
  marginBottom: "16px",
  bottom: 80,
  right: "28vw",
  left: "28vw",
  zIndex: 2,
});

interface EventsByMonth {
  events: EventCardProps[];
  month: string;
}

interface CalendarPresentationProps {
  tabs: string[];
  activeTab: string;
  upcommingEvents: EventsByMonth[];
  pastEvents: EventsByMonth[];
  onTabClick: (tab: string) => void;
}

const CalendarPresentation = memo(
  ({
    tabs,
    activeTab,
    pastEvents,
    upcommingEvents,
    onTabClick,
  }: CalendarPresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Calendar" backgroundColor="#FFFFFF" />
        <CoachIcon />
        <TabsComponent
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={onTabClick}
        />
        {activeTab === "Upcomming Events"
          ? upcommingEvents.map((month, index) => (
              <>
                {index === 0 ? (
                  <SectionTitle className="title" sx={{ marginTop: "72px" }}>
                    {month.month}
                  </SectionTitle>
                ) : (
                  <SectionTitle className="title">{month.month}</SectionTitle>
                )}
                <EventsContainer>
                  {month.events.map((event) => (
                    <EventCard
                      day={event.day}
                      month={event.month}
                      title={event.title}
                      eventType={event.eventType}
                      gameLocation={event.gameLocation}
                    />
                  ))}
                </EventsContainer>
              </>
            ))
          : pastEvents.map((month, index) => (
              <>
                {index === 0 ? (
                  <SectionTitle className="title" sx={{ marginTop: "72px" }}>
                    {month.month}
                  </SectionTitle>
                ) : (
                  <SectionTitle className="title">{month.month}</SectionTitle>
                )}
                <EventsContainer>
                  {month.events.map((event) => (
                    <EventCard
                      day={event.day}
                      month={event.month}
                      title={event.title}
                      eventType={event.eventType}
                      gameLocation={event.gameLocation}
                    />
                  ))}
                </EventsContainer>
              </>
            ))}
        <CreateButton variant="contained" href="/create-event">
          Create Event
        </CreateButton>
        <BottomMenu />
      </PageContainer>
    );
  }
);

export default CalendarPresentation;
