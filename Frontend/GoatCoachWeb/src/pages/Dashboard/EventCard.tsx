import { Typography, styled } from "@mui/material";
import { memo } from "react";
import Gym from "../../assets/gym.png";
import Stadium from "../../assets/stadium.png";
import { EventType, GameLocationEnum } from "../../utils/utils";

const Month = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Rubik",
  fontSize: "14px",
  lineHeight: "16px",
});
const Day = styled(Typography)({
  color: "#FFFFFF",
  fontFamily: "Rubik",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "16px",
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
  opacity: 0.4,
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
  opacity: 0.4,
});

const DateContainer = styled("div")({
  position: "absolute",
  top: 12,
  left: 12,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#33658A",
  boxShadow: "6px 4px 3.3px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "12px",
  width: "48px",
  aspectRatio: 1,
});

const Title = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "28px",
  color: "rgb(74, 74, 74, 0.9)",
  zIndex: 1,
  width: "50%",
  fontWeight: 600,
  lineHeight: 1.1,
});

const Subtitle = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "12px",
  color: "#FFFFFF",
  fontWeight: 600,
  zIndex: 1,
});

interface SubtitleContainerProps {
  gameLocation?: GameLocationEnum;
}

const SubtitleContainer = styled("div")(
  ({ gameLocation }: SubtitleContainerProps) => ({
    padding: "4px 8px",
    backgroundColor:
      gameLocation === GameLocationEnum.HOME ? "#3A8A33" : "#8A3333",
    borderRadius: "12px",
    zIndex: 1,
  })
);

export interface EventCardProps {
  day: number;
  month: string;
  title: string;
  gameLocation?: GameLocationEnum;
  eventType: EventType;
}

const EventCard = memo(
  ({ day, month, title, gameLocation, eventType }: EventCardProps) => {
    return (
      <EventCardContainer>
        {eventType === EventType.GAME ? (
          <GameBackground />
        ) : (
          <PracticeBackground />
        )}
        <DateContainer>
          <Month>{month}</Month>
          <Day>{day}</Day>
        </DateContainer>
        <Title>{title}</Title>
        {eventType === EventType.GAME ? (
          <SubtitleContainer gameLocation={gameLocation}>
            <Subtitle>{gameLocation}</Subtitle>
          </SubtitleContainer>
        ) : null}
      </EventCardContainer>
    );
  }
);

export default EventCard;
