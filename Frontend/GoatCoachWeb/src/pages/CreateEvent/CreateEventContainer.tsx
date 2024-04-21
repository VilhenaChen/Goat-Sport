import { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventType, GameLocationEnum } from "../../utils/utils";
import CreateEventPresentation from "./CreateEventPresentation";
const PLAYERS = [
  { id: "1", name: "John Doe", position: "forward" },
  { id: "2", name: "Juan Morales", position: "Goalkeeper" },
  { id: "3", name: "Ben Howard", position: "Defense" },
  { id: "4", name: "Steven Boyce", position: "forward" },
  { id: "5", name: "John Smith", position: "Goalkeeper" },
  { id: "6", name: "Bruno Ferreira", position: "Defense" },
  { id: "7", name: "Diogo Fernandes", position: "forward" },
  { id: "8", name: "Daniel Silva", position: "Goalkeeper" },
  { id: "9", name: "Thomas Muller", position: "Defense" },
  { id: "10", name: "Thimothy Henry", position: "forward" },
  { id: "11", name: "Joe Bruns", position: "Goalkeeper" },
  { id: "12", name: "Mark Simpson", position: "Defense" },
];
const CreateEventContainer = memo(() => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [type, setType] = useState<EventType | undefined>(undefined);
  const [location, setLocation] = useState<GameLocationEnum | undefined>(
    undefined
  );

  const navigate = useNavigate();

  const [selectedMainPlayers, setSelectedMainPlayers] = useState<string[]>([]);

  const onClickMainPlayer = useCallback((players: string | string[]) => {
    setSelectedMainPlayers(
      typeof players === "string" ? players.split(",") : players
    );
  }, []);

  const [selectedSparePlayers, setSelectedSparePlayers] = useState<string[]>(
    []
  );

  const onClickSparePlayer = useCallback((players: string | string[]) => {
    setSelectedSparePlayers(
      typeof players === "string" ? players.split(",") : players
    );
  }, []);

  const onChangeDate = useCallback((date: Date | undefined) => {
    setDate(date);
  }, []);

  const onChangeLocation = useCallback(
    (location: GameLocationEnum | undefined) => {
      setLocation(location);
    },
    []
  );

  const onChangeType = useCallback((Type: EventType | undefined) => {
    setType(Type);
  }, []);

  const onChangeTitle = useCallback((title: string | undefined) => {
    setTitle(title);
  }, []);

  const onSave = useCallback(() => {
    navigate("/calendar");
  }, [navigate]);

  const onDiscard = useCallback(() => {
    setDate(undefined);
    setLocation(undefined);
    setSelectedMainPlayers([]);
    setSelectedSparePlayers([]);
    setTitle(undefined);
    setType(undefined);
  }, []);

  return (
    <CreateEventPresentation
      date={date}
      title={title}
      type={type}
      location={location}
      selectedSparePlayers={selectedSparePlayers}
      selectedMainPlayers={selectedMainPlayers}
      players={PLAYERS}
      onChangeDate={onChangeDate}
      onChangeTitle={onChangeTitle}
      onChooseType={onChangeType}
      onChooseLocation={onChangeLocation}
      onClickMainPlayer={onClickMainPlayer}
      onClickSparePlayer={onClickSparePlayer}
      onDiscard={onDiscard}
      onSave={onSave}
    />
  );
});

export default CreateEventContainer;
