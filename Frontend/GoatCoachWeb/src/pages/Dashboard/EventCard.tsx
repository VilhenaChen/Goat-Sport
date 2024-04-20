import { Typography, styled } from "@mui/material";
import { memo } from "react";
import Gym from "../../assets/gym.png";
import Stadium from "../../assets/stadium.png";
import { EventType } from "../../utils/utils";

const Month = styled(Typography)({
  color: "#33658A",
  fontFamily: "Rubik",
  fontSize: "12px",
});
const Day = styled(Typography)({
  color: "#33658A",
  fontFamily: "Rubik",
  fontSize: "12px",
  fontWeight: 600,
});

const EventCardContainer = styled("div")({
  backgroundColor: "#FFFFFF",
  borderRadius: "24px",
  padding: "16px",
  height: "64px",
  position: "relative",
  boxShadow: "6px 4px 3.3px 0px rgba(0, 0, 0, 0.25)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const GameBackground = styled("div")({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundImage: `url(${Stadium})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  borderRadius: "24px",
  opacity: 0.56,
});

const PracticeBackground = styled("div")({
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundImage: `url(${Gym})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "absolute",
  borderRadius: "24px",
  opacity: 0.56,
});

const DateContainer = styled("div")({
  position: "absolute",
  top: 12,
  left: 12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#D9D9D9",
  boxShadow: "6px 4px 3.3px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",
  width: "40px",
  aspectRatio: 1,
});

const Title = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "24px",
  color: "#4A4A4A",
  zIndex: 1,
  width: "50%",
});

const Subtitle = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "12px",
  color: "#4A4A4A",
  zIndex: 1,
});

export interface EventCardProps {
  day: number;
  month: string;
  title: string;
  subtitle?: string;
  eventType: EventType;
}

const EventCard = memo(
  ({ day, month, title, subtitle, eventType }: EventCardProps) => {
    return (
      <EventCardContainer>
        {eventType === EventType.Game ? (
          <GameBackground />
        ) : (
          <PracticeBackground />
        )}
        <DateContainer>
          <Month>{month}</Month>
          <Day>{day}</Day>
        </DateContainer>
        <Title>{title}</Title>
        {EventType.Game === EventType.Game ? (
          <>
            <Subtitle>{subtitle}</Subtitle>
          </>
        ) : null}
      </EventCardContainer>
    );
  }
);

export default EventCard;
