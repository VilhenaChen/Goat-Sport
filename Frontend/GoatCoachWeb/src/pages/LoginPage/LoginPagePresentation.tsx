import { Button, TextField, Typography, styled } from "@mui/material";
import { memo } from "react";
import { TranslucidContainer } from "../../components/TranslucidContainer";

import BackgroundImage from "../../assets/loginBackground.jpg";
import { Link } from "react-router-dom";

export const LoginPagePresentation = memo(() => {
  const BackgroundContainer = styled("div")({
    flex: 1,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <BackgroundContainer>
      <TranslucidContainer>
        <Typography className="title">Login</Typography>
        <TextField id="standard-basic" label="Email" variant="standard" />
        <TextField id="standard-basic" label="Password" type="password" variant="standard" />
        <Typography>Need an Account? <Link to="/register">Sign Up</Link></Typography>
        <Button variant="contained">Login</Button>
      </TranslucidContainer>
    </BackgroundContainer>
  );
});
