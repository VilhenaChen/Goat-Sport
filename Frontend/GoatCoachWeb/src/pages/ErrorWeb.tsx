import { Typography, styled } from "@mui/material";
import { memo } from "react";

import BackgroundImage from "../assets/homePageBackground.png";

const ErrorTitle = styled(Typography)({
  color: "#33658A",
  fontFamily: "Rubik Mono One",
  fontSize: "24px",
});

const ErrorDescription = styled(Typography)({
  color: "white",
  fontFamily: "Rubik",
  fontSize: "16px",
  width: "70%",
  fontWeight: 600,
});

const BackgroundContainer = styled("div")({
  flex: 1,
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const ErrorContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  gap: "10px",
  backgroundColor: "rgba(217,217,217,0.3)",
  padding: "10px",
  borderRadius: "16px",
});

export const ErrorWeb = memo(() => {
  return (
    <BackgroundContainer>
      <ErrorContainer>
        <ErrorTitle>Em Breve</ErrorTitle>
        <ErrorDescription>
          De momento esta aplicação encontra-se apenas disponível para vista
          mobile
        </ErrorDescription>
      </ErrorContainer>
    </BackgroundContainer>
  );
});
