import { Button, Typography } from "@mui/material";
import { memo } from "react";
import { TranslucidContainer } from "../../components/TranslucidContainer";

import BackgroundImage from "../../assets/loginBackground.jpg";
import { BackgroundContainer } from "../../components/BackgroundContainer";

interface ChooseSportPresentationProps {
  handleSportSelection: () => void;
}

export const ChooseSportPresentation = memo(({handleSportSelection} : ChooseSportPresentationProps) => {
  return (
    <BackgroundContainer BackgroundImage={BackgroundImage}>
      <TranslucidContainer>
        <Typography className="title">Choose Sport</Typography>
        <Typography>
          Select a sport, as your team is registered in more than one
        </Typography>
        <Button variant="contained" value="football" onClick={handleSportSelection}>Football</Button>
        <Button variant="contained" value="basketball" onClick={handleSportSelection}>Basketball</Button> 
      </TranslucidContainer>
    </BackgroundContainer>
  );
});
