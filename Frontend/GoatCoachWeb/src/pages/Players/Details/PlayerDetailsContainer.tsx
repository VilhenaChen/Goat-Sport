import { memo, useCallback, useMemo, useState } from "react";
import { useVerifyMobileView } from "../../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../../hooks/useVerifyUserLogin";
import {
  ListPlayersPresentation,
  PlayerDetailsPresentation,
} from "./PlayerDetailsPresentation";
import { useNavigate } from "react-router-dom";

// interface Player {
//   name: string,
//   age: number,
//   position:string
// }

export const PlayersDetailsContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const navigate = useNavigate();

  const player = { id: 1, name: "John Doe", age: 31, position: "forward" };
  const notes = [
    {
      id: 1,
      title: "Nota",
      date: "Jun 10",
      description: "LOREM IPSUM"
    },
    {
      id: 2,
      title: "Nota2",
      date: "Jun 11",
      description: "LOREM IPSUM"
    },
  ];

  const cards = [
    {
      type: "red",
      name: "Red Card",
      date: "10/06",
    },
    {
      type: "yellow",
      name: "Yellow Card",
      date: "11/07",
    },
  ];
  
  const injuries = [
    {
      title: "Concussion",
      dateStart: "10/06/22",
      dateEnd: "10/06/22",
    },
    {
      title: "Broken Ankle",
      dateStart: "10/06/22",
      dateEnd: "10/06/22",
    },
  ];
  const sport = "Soccer";

  const handlePlayerDelete = useCallback((id: number) => {
    navigate(`/player/${id}/delete`);
  }, []);

  const handlePlayerEdit = useCallback((id: number) => {
    navigate(`/player/${id}/edit`);
  }, []);

  
  const handleAddNote = useCallback((id: number) => {
    navigate(`/player/${id}/note/create`);
  }, []);


  const handleNoteClick = useCallback((id: number) => {
    setNoteId(id);
    setOpen(true);
    
  }, []);
  const handleNoteClickClose = useCallback(() => {
    setOpen(false);
  }, []);
  const [profileTabChosen, setProfileTabChosen] = useState<string>("Info");

  const handleProfileTabChange = useCallback((tab: string) => {
    setProfileTabChosen(tab);
  }, []);
  const [noteId, setNoteId]= useState(-1);
  const [open, setOpen] = useState(false);

  return (
    <PlayerDetailsPresentation
      handlePlayerEdit={handlePlayerEdit}
      player={player}
      handlePlayerDelete={handlePlayerDelete}
      onChangeTab={handleProfileTabChange}
      profileTabChosen={profileTabChosen}
      sport={sport}
      notes={notes}
      punishments={cards}
      handleNoteClick={handleNoteClick}
      injuries={injuries}
      open={open}
      noteId={noteId}
      handleNoteClickClose={handleNoteClickClose}
      handleAddNote={handleAddNote}
    />
  );
});
