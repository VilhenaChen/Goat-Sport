import { styled } from "@mui/material";
import { memo } from "react";
import Icon from "../assets/coach-icon.svg";

const StyledIcon = styled("img")({
  position: "fixed",
  top: 10,
  right: 10,
});

export const CoachIcon = memo(() => {
  return <StyledIcon alt="coach" src={Icon} />;
});
