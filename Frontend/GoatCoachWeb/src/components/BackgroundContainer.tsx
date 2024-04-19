import React from "react";
import { styled } from "@mui/material";

const Background = styled("div")(({ backgroundImage }: { backgroundImage?: string }) => ({
    flex: 1,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    objectFit: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
  }));

  interface BackgroundContainerProps {
    children?: React.ReactNode;
    BackgroundImage: string;
  }

  export const BackgroundContainer = ({
    children,
    BackgroundImage
  }: BackgroundContainerProps) => {
    return <Background backgroundImage={BackgroundImage}>{children}</Background>;
  };
  