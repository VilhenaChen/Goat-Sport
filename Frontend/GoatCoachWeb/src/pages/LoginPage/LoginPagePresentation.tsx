import { Button, TextField, Typography, styled } from "@mui/material";
import { memo } from "react";
import { TranslucidContainer } from "../../components/TranslucidContainer";

import BackgroundImage from "../../assets/loginBackground.jpg";
import { Link } from "react-router-dom";
import { BackgroundContainer } from "../../components/BackgroundContainer";


export const LoginPagePresentation = memo(() => {
  return (
    <BackgroundContainer BackgroundImage={BackgroundImage}>
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
