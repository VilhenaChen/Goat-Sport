import { memo, useCallback } from "react";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { Button, styled } from "@mui/material";
import BackgroundImage from "../../assets/homePageBackground.png";
import Logo from "../../assets/logoGoatCoach.png";
import { useNavigate } from "react-router-dom";

export const HomePage = memo(() => {
  const HomepageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  });

  const navigate = useNavigate();

  const loginClick = useCallback(()=>{
    navigate("/login");
  },[]);
  
  const registerClick = useCallback(()=>{
    navigate("/register");
  },[]);

  return (
    <BackgroundContainer BackgroundImage={BackgroundImage}>
      <HomepageContainer>
        <img src={Logo} alt="GoatCoach Logo" />
        <Button variant="contained" onClick={loginClick}>Login</Button>
        <Button variant="contained" onClick={registerClick}>Register</Button>
      </HomepageContainer>
    </BackgroundContainer>
  );
});
