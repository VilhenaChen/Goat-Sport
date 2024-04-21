import {
  Avatar,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { memo } from "react";
import { BottomMenu } from "../../../components/BottomMenu";
import { CoachIcon } from "../../../components/CoachIcon";
import { HeaderContainer } from "../../../components/Header";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PlayerAvatar from "../../../assets/playerAvatar.svg";
import NoPlayers from "../../../assets/NoPlayers.svg";
import TabsComponent from "../../../components/TabsComponent";
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';

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

const FloatingButton = styled("div")({
  float: "right",
});

const NoteContainer = styled("div")({
  display:"grid",
  gridTemplateColumns: "50% 50%",
  position: "relative",
  columnGap: "16px",
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
  handleNoteClick: (id:number)=>void;
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
    notes
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
                <NoteDiv onClick={()=>{handleNoteClick(note.id)}} >
                  <FloatingButton><OpenInFullRoundedIcon/></FloatingButton>
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
        <BottomMenu />
      </PageContainer>
    );
  }
);
