import { Button, Typography, styled } from "@mui/material";
import { memo } from "react";
import { BottomMenu } from "../../../components/BottomMenu";
import { CoachIcon } from "../../../components/CoachIcon";
import { HeaderContainer } from "../../../components/Header";
import PlayerAvatar from "../../../assets/playerAvatar.svg";
import RedCard from "../../../assets/RedCard.svg";
import YellowCard from "../../../assets/YellowCard.svg";
import TabsComponent from "../../../components/TabsComponent";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
interface Player {
  id: number;
  name: string;
  age: number;
  position: string;
}
interface Note {
  id: number;
  title: string;
  date: string;
}

interface Card {
  type: string;
  name: string;
  date: string;
}
interface Injury {
  title: string;
  dateStart: string;
  dateEnd: string;
}

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  paddingBottom: "80px",
  overflowY: "hidden",
  marginTop: "70px",
  marginBottom: "70px",
  padding: "0px 32px",
});

const ActionContainer = styled("div")({
  position: "absolute",
  bottom: "32px",
  left: "0",
  right: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});

const StyledProfileIcon = styled("img")({
  margin: "40px 0px",
  width: "90px",
  alignSelf: "center",
});

const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "16px",
});

const NoteDiv = styled("div")({
  padding: "16px",
  background: "#F2F489",
});
const TitleNote = styled(Typography)({
  textOverflow: "ellipsis",
  textWrap: "nowrap",
  overflow: "hidden",
  fontSize: "22px",
  textAlign: "left",
  color: "rgba(51,101,138,0.75)",
});
const TitleDate = styled(Typography)({
  fontSize: "12px",
  textAlign: "left",
  color: "rgba(51,101,138,0.75)",
});

const TitleNoteInjury = styled(Typography)({
  textOverflow: "ellipsis",
  textWrap: "nowrap",
  overflow: "hidden",
  fontSize: "22px",
  textAlign: "left",
  color: "#fff",
});
const TitleDateInjury = styled(Typography)({
  fontSize: "12px",
  textAlign: "left",
  color: "#fff",
});
const FloatingButton = styled("div")({
  float: "right",
});

const Punishment = styled("div")({
  background: "#D9D9D9",
  display: "flex",
  padding: "16px",
  gap: "32px",
  borderRadius: "25px"
});

const NoteContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "50% 50%",
  position: "relative",
  columnGap: "16px",
  marginTop: "16px",
});

const InjuriesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "16px",
});

const InjuryDiv = styled("div")({
  background: "#33658A",
  display: "flex",
  padding: "16px",
  gap: "32px",
  borderRadius: "25px",
});


const PunishmentsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "16px",
});
const ActionsButton = styled(Button)({});

interface PlayerDetailsPresentationProps {
  handlePlayerEdit: (id: number) => void;
  handlePlayerDelete: (id: number) => void;
  player: Player;
  profileTabChosen: string;
  onChangeTab: (tab: string) => void;
  sport: string;
  notes: Note[];
  handleNoteClick: (id: number) => void;
  punishments: Card[];
  injuries: Injury[];
}

export const PlayerDetailsPresentation = memo(
  ({
    handlePlayerEdit,
    handlePlayerDelete,
    handleNoteClick,
    profileTabChosen,
    onChangeTab,
    player,
    sport,
    notes,
    punishments,
    injuries
  }: PlayerDetailsPresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Player Details" />
        <CoachIcon />

        <StyledProfileIcon src={PlayerAvatar} alt="Profile" />

        <TabsComponent
          activeTab={profileTabChosen}
          onTabClick={onChangeTab}
          tabs={["Info", "Notes", "Punishments", "Injuries"]}
        />

        {profileTabChosen === "Info" ? (
          <>
            <InfoContainer>
              <div>
                <Typography className="label">Name:</Typography>
                <Typography className="value">{player.name}</Typography>
              </div>
              <div>
                <Typography className="label">Age:</Typography>
                <Typography className="value">{player.age}</Typography>
              </div>
              <div>
                <Typography className="label">Position:</Typography>
                <Typography className="value">{player.position}</Typography>
              </div>
              <div>
                <Typography className="label">Sport:</Typography>
                <Typography className="value">{sport}</Typography>
              </div>
            </InfoContainer>

            <ActionContainer>
              <ActionsButton
                variant="contained"
                color="info"
                onClick={() => handlePlayerEdit(player.id)}
              >
                Edit
              </ActionsButton>
              <ActionsButton
                variant="contained"
                color="error"
                onClick={() => handlePlayerDelete(player.id)}
              >
                Delete
              </ActionsButton>
            </ActionContainer>
          </>
        ) : null}

        {profileTabChosen === "Notes" ? (
          <>
            <NoteContainer>
              {notes.map((note) => (
                <NoteDiv
                  onClick={() => {
                    handleNoteClick(note.id);
                  }}
                >
                  <FloatingButton>
                    <OpenInFullRoundedIcon />
                  </FloatingButton>
                  <TitleNote>{note.title}</TitleNote>
                  <TitleDate className="date">{note.date}</TitleDate>
                </NoteDiv>
              ))}
            </NoteContainer>

            <ActionContainer>
              <ActionsButton
                variant="contained"
                onClick={() => handlePlayerDelete(player.id)}
              >
                Add Note
              </ActionsButton>
            </ActionContainer>
          </>
        ) : null}

        {profileTabChosen === "Punishments" ? (
          <>
            <PunishmentsContainer>
              {punishments.map((card) => (
                <Punishment>
                  {card.type == "red" ? (
                    <img src={RedCard} alt="Red Card Image" />
                  ) : (
                    <img src={YellowCard} alt="Red Card Image" />
                  )}

                  <div>
                    <TitleNote>{card.name}</TitleNote>
                    <TitleDate className="date">{card.date}</TitleDate>
                  </div>
                </Punishment>
              ))}
            </PunishmentsContainer>
          </>
        ) : null}

        {profileTabChosen === "Injuries" ? (
          <>
            <InjuriesContainer>
              {injuries.map((injury) => (
                <InjuryDiv>
                  <MedicalServicesRoundedIcon style={{fontSize:"40px", alignSelf:"center", color: "#fff"}}/>
                  <div>
                    <TitleNoteInjury>{injury.title}</TitleNoteInjury>
                    <TitleDateInjury className="date">Start: {injury.dateStart}</TitleDateInjury>
                    <TitleDateInjury className="date">Return: {injury.dateEnd}</TitleDateInjury>
                  </div>
                </InjuryDiv>
              ))}
            </InjuriesContainer>
          </>
        ) : null}
        <BottomMenu />
      </PageContainer>
    );
  }
);
