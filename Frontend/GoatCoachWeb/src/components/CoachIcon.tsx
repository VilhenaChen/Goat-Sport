import { styled } from "@mui/material";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../assets/coach-icon.svg";

const StyledIcon = styled("img")({
  position: "fixed",
  top: 10,
  right: 10,
  width: "58px",
});

export const CoachIcon = memo(() => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);
  return <StyledIcon alt="coach" src={Icon} onClick={handleClick} />;
});
