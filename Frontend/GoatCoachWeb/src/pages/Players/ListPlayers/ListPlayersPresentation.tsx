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
import { Modal } from '@mui/base/Modal';


interface Player {
  id: number;
  name: string;
  age: number;
  position: string;
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

const ListText = styled(ListItemText)({
  color: "#33658A",
});

const ListPlayers = styled(List)({
  maxHeight: "calc(100vh - 300px)",
  overflow: "scroll",
  marginBottom: "16px",
  marginTop: "16px",
});

const Item = styled(ListItem)({
  gap: "16px",
  color: "#33658A",
});

const FlexContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const ImageContainer = styled("div")({
  height: "calc(100vh - 300px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
});

const CreateButton = styled(Button)({
  position: "absolute",
  bottom: "32px",
  transform: "translateX(-50%)",
  left: "auto",
  right: "auto",
  width: "max-content",
});

interface ListPlayersPresentationProps {
  handlePlayerCreation: () => void;
  onClickPlayer: (id: number) => void;
  playersList: Player[];
}

export const ListPlayersPresentation = memo(
  ({
    handlePlayerCreation,
    playersList,
    onClickPlayer,
  }: ListPlayersPresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Team Name" />
        <CoachIcon />

        <TextField
          style={{ width: "100%" }}
          id="input-with-icon-textfield"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        {playersList.length > 0 ? (
          <ListPlayers>
            {playersList.map((player) => (
              <Item onClick={() => onClickPlayer(player.id)}>
                <ListItemAvatar>
                  <img src={PlayerAvatar} alt="Player Avatar"></img>
                </ListItemAvatar>
                <ListText
                  primary={player.name}
                  secondary={
                    <>
                      <FlexContainer>
                        <Typography>{player.age}</Typography>
                        <Typography>{player.position}</Typography>
                      </FlexContainer>
                    </>
                  }
                />
              </Item>
            ))}
          </ListPlayers>
        ) : (
          <ImageContainer>
            <img src={NoPlayers} alt="No players Graphism"></img>
            <Typography>
              You dont have any players on your team, start by adding them
            </Typography>
          </ImageContainer>
        )}

        <CreateButton variant="contained" onClick={handlePlayerCreation}>
          Create Player
        </CreateButton>
        <BottomMenu />
      </PageContainer>
    );
  }
);
