import { MedicalInformation, Sports } from "@mui/icons-material";
import { Typography, styled } from "@mui/material";
import { memo } from "react";
import { BottomMenu } from "../../components/BottomMenu";
import { CoachIcon } from "../../components/CoachIcon";
import EventCard, { EventCardProps } from "./EventCard";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  paddingBottom: "80px",
  overflowY: "hidden",
});

const WelcomeMessageText = styled(Typography)({
  color: "#33658A",
  fontFamily: "Rubik Mono One",
  fontSize: "20px",
  textAlign: "start",
  position: "absolute",
  top: 36,
  left: 38,
  zIndex: 2,
});

const WelcomeMessageShadow = styled(Typography)({
  color: "rgb(74, 74, 74, 0.5)",
  fontFamily: "Rubik Mono One",
  fontSize: "20px",
  textAlign: "start",
  top: 38,
  left: 36,
  position: "absolute",
  zIndex: 0,
});

const CoachName = styled(Typography)({
  color: "#4A4A4A",
  fontFamily: "Rubik Mono One",
  fontSize: "18px",
  textAlign: "center",
  marginTop: "68px",
});

const TeamAndSport = styled(Typography)({
  color: "rgb(74, 74, 74, 0.5)",
  fontFamily: "Rubik Mono One",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "4px",
  marginBottom: "16px",
});

const SectionTitle = styled(Typography)({
  color: "#33658A",
  fontFamily: "Rubik Mono One",
  fontSize: "16px",
  textAlign: "start",
  marginLeft: "32px",
  marginTop: "16px",
});

const SquadDataContainer = styled("div")({
  marginTop: "8px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
});

const SquadDataElementContainer = styled("div")({
  backgroundColor: "#D9D9D9",
  width: "100px",
  height: "50px",
  borderRadius: "24px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px",
  boxSizing: "border-box",
});

const SquadDataElementText = styled(Typography)({
  fontSize: "16px",
  fontFamily: "Rubik Mono One",
  color: "#33658A",
  fontWeight: 400,
});

const WelcomeMessageContainer = styled("div")({
  position: "relative",
});

const NextEventsContainer = styled("div")({
  padding: "16px 32px 16px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  position: "relative",
});

const InjuriesIcon = styled(MedicalInformation)({
  fontSize: "32px",
  color: "#4A4A4A",
});

const PunishmentsIcon = styled(Sports)({
  fontSize: "32px",
  color: "#4A4A4A",
});

interface DashboardPresentationProps {
  coachName: string;
  teamName: string;
  sport: string;
  injuries: number;
  punishments: number;
  nextEvents: EventCardProps[];
}

export const DashboardPresentation = memo(
  ({
    coachName,
    teamName,
    sport,
    injuries,
    punishments,
    nextEvents,
  }: DashboardPresentationProps) => {
    return (
      <PageContainer>
        <CoachIcon />
        <WelcomeMessageContainer>
          <WelcomeMessageText>Welcome</WelcomeMessageText>
          <WelcomeMessageShadow>Welcome</WelcomeMessageShadow>
        </WelcomeMessageContainer>
        <CoachName>{coachName}</CoachName>
        <TeamAndSport>
          {teamName} - {sport}
        </TeamAndSport>
        <SectionTitle>Next Events</SectionTitle>
        <NextEventsContainer>
          {nextEvents.map((event) => (
            <EventCard
              title={event.title}
              subtitle={event.subtitle}
              day={event.day}
              month={event.month}
              eventType={event.eventType}
            />
          ))}
        </NextEventsContainer>
        <SectionTitle>Squad Data</SectionTitle>
        <SquadDataContainer>
          <SquadDataElementContainer>
            <InjuriesIcon />
            <SquadDataElementText>{injuries}</SquadDataElementText>
          </SquadDataElementContainer>
          <SquadDataElementContainer>
            <PunishmentsIcon />
            <SquadDataElementText>{punishments}</SquadDataElementText>
          </SquadDataElementContainer>
        </SquadDataContainer>
        <BottomMenu />
      </PageContainer>
    );
  }
);
