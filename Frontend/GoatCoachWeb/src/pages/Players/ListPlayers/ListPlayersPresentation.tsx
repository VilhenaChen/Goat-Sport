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
  overflow:"scroll",
  marginBottom: "16px",
  marginTop: "16px",
});

const Item = styled(ListItem)({
  gap: "16px",
});

const FlexContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
const CreateButton = styled(Button)({
  position: "absolute",
  bottom: "32px",
  transform: "translateX(-50%)",
  width: "max-content",
});

interface ListPlayersPresentationProps {
  handlePlayerCreation: ()=>void,
}

export const ListPlayersPresentation = memo(
  ({handlePlayerCreation}: ListPlayersPresentationProps) => {
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
        <ListPlayers>
          <Item>
            <ListItemAvatar>
              <img src={PlayerAvatar} alt="Player Avatar"></img>
            </ListItemAvatar>
            <ListText
              primary="Player Name"
              secondary={
                <>
                  <FlexContainer>
                    <Typography>Age</Typography>
                    <Typography>Position</Typography>
                  </FlexContainer>
                </>
              }
            />
          </Item>
        </ListPlayers>
        <CreateButton variant="contained" onClick={handlePlayerCreation}>Create Player</CreateButton>
        <BottomMenu />
      </PageContainer>
    );
  }
);
