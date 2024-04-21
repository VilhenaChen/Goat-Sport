import {
  Backdrop,
  Button,
  Modal,
  Typography,
  css,
  styled,
} from "@mui/material";
import { memo, useState } from "react";
import { BottomMenu } from "../../../components/BottomMenu";
import { CoachIcon } from "../../../components/CoachIcon";
import { HeaderContainer } from "../../../components/Header";
import PlayerAvatar from "../../../assets/playerAvatar.svg";
import RedCard from "../../../assets/RedCard.svg";
import YellowCard from "../../../assets/YellowCard.svg";
import TabsComponent from "../../../components/TabsComponent";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
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
  description: string;
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
  borderRadius: "25px",
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

const FloatingButton = styled("div")({
  float: "right",
});

const Punishment = styled("div")({
  background: "#D9D9D9",
  display: "flex",
  padding: "16px",
  gap: "32px",
  borderRadius: "25px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, .25)",
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
  background: "#A5CCF2",
  display: "flex",
  padding: "16px",
  gap: "32px",
  borderRadius: "25px",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, .25)",
});

const ModalContent = styled("div")({
  background: "#F2F489",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  padding: "16px",
  gap: "32px",
  maxHeight:"60%",
  height:"auto",
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
  open: boolean;
  handleNoteClickClose: () => void;
  noteId: number;
}

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

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
    injuries,
    open,
    handleNoteClickClose,
    noteId,
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
            <div>
              <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleNoteClickClose}
                slots={{ backdrop: StyledBackdrop }}
              >
                <>
                  {
                    <ModalContent>
                      <Typography id="unstyled-modal-title" className="title">
                        {
                          notes.find((note) => {
                            return note.id === noteId;
                          })?.title
                        }
                      </Typography>
                      <div style={{overflow:"scroll", maxHeight:"300px"}}>
                        <Typography
                          id="unstyled-modal-description"
                          className="modal-description"
                        >
                          {
                            notes.find((note) => {
                              return note.id === noteId;
                            })?.description
                          }
                        </Typography>

                      </div>
                      
                      <Typography style={{fontSize:"16px", marginBottom:"0px"}}>{`Created at ${
                        notes.find((note) => {
                          return note.id === noteId;
                        })?.date
                      }`}</Typography>
                    </ModalContent>
                  }
                </>
              </Modal>
            </div>

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
                  <MedicalServicesRoundedIcon
                    style={{
                      fontSize: "40px",
                      alignSelf: "center",
                      color: "#fff",
                    }}
                  />
                  <div>
                    <TitleNote>{injury.title}</TitleNote>
                    <TitleDate className="date">
                      Start: {injury.dateStart}
                    </TitleDate>
                    <TitleDate className="date">
                      Return: {injury.dateEnd}
                    </TitleDate>
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
