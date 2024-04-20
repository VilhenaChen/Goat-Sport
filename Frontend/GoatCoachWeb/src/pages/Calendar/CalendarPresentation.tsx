import { styled } from "@mui/material";
import { memo } from "react";
import { BottomMenu } from "../../components/BottomMenu";
import { CoachIcon } from "../../components/CoachIcon";
import { HeaderContainer } from "../../components/Header";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "16px 36px 88px 36px",
});

const CalendarPresentation = memo(() => {
  return (
    <PageContainer>
      <HeaderContainer title="Calendar" backgroundColor="#FFFFFF" />
      <CoachIcon />
      <BottomMenu />
    </PageContainer>
  );
});

export default CalendarPresentation;
