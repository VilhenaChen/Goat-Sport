import { Button, styled } from "@mui/material";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../../assets/homePageBackground.png";
import Logo from "../../assets/logoGoatCoach.png";
import { BackgroundContainer } from "../../components/BackgroundContainer";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";

export const HomePage = memo(() => {
  useVerifyMobileView();
  const HomepageContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  });

  const navigate = useNavigate();

  const loginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const registerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <BackgroundContainer BackgroundImage={BackgroundImage}>
      <HomepageContainer>
        <img src={Logo} alt="GoatCoach Logo" />
        <Button variant="contained" onClick={loginClick}>
          Login
        </Button>
        <Button variant="contained" onClick={registerClick}>
          Register
        </Button>
      </HomepageContainer>
    </BackgroundContainer>
  );
});
