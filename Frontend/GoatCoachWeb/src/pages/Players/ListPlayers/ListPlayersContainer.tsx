import { memo, useMemo } from "react";
import { useVerifyMobileView } from "../../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../../hooks/useVerifyUserLogin";
import { ListPlayersPresentation } from "./ListPlayersPresentation";
import { useNavigate } from "react-router-dom";

// interface Player {
//   name: string,
//   age: number,
//   position:string
// }

export const ListPlayersContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const navigate = useNavigate();

  const playersList = useMemo(()=>[{id:1, name:"John Doe", age:31, position:"forward"},{id:2, name:"Joana Doe", age:32, position:"Goalkeeper"}], []);
  
  const handlePlayerCreation = ()=>{
    //TODO
    
    navigate("/players/create");
  }

  
  const onClickPlayer = (id:number)=>{
    //TODO
    
    navigate(`/player/${id}`);
  }


  return (
    <ListPlayersPresentation handlePlayerCreation={handlePlayerCreation} playersList={playersList} onClickPlayer={onClickPlayer}
    />
  );
});
