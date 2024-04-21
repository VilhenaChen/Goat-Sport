import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { memo } from "react";
import { BottomMenu } from "../../components/BottomMenu";
import { CoachIcon } from "../../components/CoachIcon";
import EventCard from "../../components/EventCard";
import { HeaderContainer } from "../../components/Header";
import { EventType, GameLocationEnum, MONTHS } from "../../utils/utils";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "0px 36px 200px 36px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

const PreviewText = styled(Typography)({
  marginTop: "16px",
});

const StyledButton = styled(Button)({
  width: "136px",
  color: "#FFFFFF",
});

const ButtonsContainer = styled("div")({
  position: "fixed",
  marginBottom: "16px",
  bottom: 80,
  left: 0,
  right: 0,
  zIndex: 2,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface CreateEventPresentationProps {
  type: EventType | undefined;
  title: string | undefined;
  location?: GameLocationEnum;
  date: Date | undefined;
  players: { id: string; name: string; position: string }[];
  selectedMainPlayers: string[];
  selectedSparePlayers: string[];
  onChooseLocation: (location: GameLocationEnum | undefined) => void;
  onChooseType: (type: EventType | undefined) => void;
  onChangeTitle: (title: string | undefined) => void;
  onChangeDate: (date: Date | undefined) => void;
  onClickMainPlayer: (player: string | string[]) => void;
  onClickSparePlayer: (player: string | string[]) => void;
  onSave: () => void;
  onDiscard: () => void;
}

const CreateEventPresentation = memo(
  ({
    type,
    title,
    location,
    date,
    players,
    selectedMainPlayers,
    selectedSparePlayers,
    onClickMainPlayer,
    onClickSparePlayer,
    onChooseLocation,
    onChooseType,
    onChangeTitle,
    onChangeDate,
    onSave,
    onDiscard,
  }: CreateEventPresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Create Event" backgroundColor="#FFFFFF" />
        <CoachIcon />
        <PreviewText className="subtitle">Preview:</PreviewText>
        <EventCard
          day={date ? date.getDate() : 0}
          month={date ? MONTHS[date.getMonth()] : ""}
          title={title ?? ""}
          eventType={type}
          gameLocation={location}
        />

        <FormControl
          variant="standard"
          sx={{ minWidth: 120, textAlign: "left" }}
        >
          <InputLabel id="type-select-label">Type</InputLabel>
          <Select
            labelId="type-select-label"
            value={type}
            label="Type"
            variant="standard"
            onChange={(e) => onChooseType(e.target.value as EventType)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={EventType.PRACTICE}>Treino</MenuItem>
            <MenuItem value={EventType.GAME}>Jogo</MenuItem>
          </Select>
        </FormControl>
        {type === EventType.GAME || type === EventType.PRACTICE ? (
          <>
            <TextField
              label={type === EventType.GAME ? "Opponent" : "Description"}
              variant="standard"
              onChange={(e) => onChangeTitle(e.target.value)}
            />
            <MobileDateTimePicker
              label="Date"
              onChange={(e) => onChangeDate(e?.toDate() ?? undefined)}
            />
            {type === EventType.GAME ? (
              <FormControl
                variant="standard"
                sx={{ minWidth: 120, textAlign: "left" }}
              >
                <InputLabel id="location-select-label">Type</InputLabel>
                <Select
                  labelId="location-select-label"
                  value={location ?? ""}
                  label="Location"
                  variant="standard"
                  onChange={(e) =>
                    onChooseLocation(e.target.value as GameLocationEnum)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={GameLocationEnum.HOME}>Home</MenuItem>
                  <MenuItem value={GameLocationEnum.AWAY}>Away</MenuItem>
                </Select>
              </FormControl>
            ) : null}
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="main-players-multiple-select-label">
                Squad
              </InputLabel>
              <Select
                labelId="main-players-multiple-select-label"
                id="main-players-multiple-select"
                multiple
                value={selectedMainPlayers}
                onChange={(e) => onClickMainPlayer(e.target.value)}
                input={<OutlinedInput id="players-input" label="Player" />}
                renderValue={() => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selectedMainPlayers.map((player) => (
                      <Chip
                        key={player}
                        label={`${
                          players.find((p) => p.id === player)?.name
                        } (${players.find((p) => p.id === player)?.position})`}
                      />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {players.map((player) => (
                  <MenuItem key={player.id} value={player.id}>
                    {`${player.name} (${player.position})`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {type === EventType.GAME ? (
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="spare-players-multiple-select-label">
                  Spare
                </InputLabel>
                <Select
                  labelId="spare-players-multiple-select-label"
                  id="spare-players-multiple-select"
                  multiple
                  value={selectedSparePlayers}
                  onChange={(e) => onClickSparePlayer(e.target.value)}
                  input={<OutlinedInput id="players-input" label="Player" />}
                  renderValue={() => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selectedSparePlayers.map((player) => (
                        <Chip
                          key={player}
                          label={`${
                            players.find((p) => p.id === player)?.name
                          } (${
                            players.find((p) => p.id === player)?.position
                          })`}
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {players.map((player) => (
                    <MenuItem key={player.id} value={player.id}>
                      {`${player.name} (${player.position})`}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
          </>
        ) : null}
        <ButtonsContainer>
          <StyledButton variant="contained" onClick={onSave} color="success">
            Save
          </StyledButton>
          <StyledButton variant="contained" color="error" onClick={onDiscard}>
            Discard
          </StyledButton>
        </ButtonsContainer>
        <BottomMenu />
      </PageContainer>
    );
  }
);

export default CreateEventPresentation;
