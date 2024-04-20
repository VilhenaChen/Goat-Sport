import { CalendarMonth, Groups, Home } from "@mui/icons-material";
import { Divider, Typography, styled } from "@mui/material";
import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { userActions } from "../store/userSlice";
import { TabEnum } from "../utils/utils";
import { Navigate, useNavigate } from "react-router-dom";

const BottomNavigationContainer = styled("div")({
  position: "fixed",
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 20px",
  right: 0,
  left: 0,
  backgroundColor: "#D6E0E8",
  borderRadius: "16px 16px 0 0",
  zIndex: 2,
});

interface TabProps {
  selected: boolean;
}

const Tab = styled("div")(({ selected }: TabProps) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: selected ? "rgba(51, 101, 138, 0.3)" : "transparent",
  padding: "4px",
  borderRadius: "16px",
  width: "95px",
}));

const CalendarIcon = styled(CalendarMonth)({
  color: "#33658A",
  fontSize: "32px",
});
const DashboardIcon = styled(Home)({
  color: "#33658A",
  fontSize: "32px",
});
const SquadIcon = styled(Groups)({
  color: "#33658A",
  fontSize: "32px",
});

const TabText = styled(Typography)({
  color: "#33658A",
});

export const BottomMenu = memo(() => {
  const tabChosen = useAppSelector((state) => state.tabChosen);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickTab = useCallback(
    (tab: TabEnum) => {
      switch(tab){
        case TabEnum.CALENDAR: navigate("/calendar");
        break;
        case TabEnum.DASHBOARD: navigate("/");
        break;
        case TabEnum.SQUAD: navigate("/players");
        break;
      }
      dispatch(userActions.changeTab({ tab }));

    },
    [dispatch]
  );

  return (
    <>
      <BottomNavigationContainer>
        <Tab
          selected={tabChosen === TabEnum.CALENDAR}
          onClick={() => onClickTab(TabEnum.CALENDAR)}
        >
          <CalendarIcon />
          <TabText>{TabEnum.CALENDAR}</TabText>
        </Tab>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab
          selected={tabChosen === TabEnum.DASHBOARD}
          onClick={() => onClickTab(TabEnum.DASHBOARD)}
        >
          <DashboardIcon />
          <TabText>{TabEnum.DASHBOARD}</TabText>
        </Tab>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Tab
          selected={tabChosen === TabEnum.SQUAD}
          onClick={() => onClickTab(TabEnum.SQUAD)}
        >
          <SquadIcon />
          <TabText>{TabEnum.SQUAD}</TabText>
        </Tab>
      </BottomNavigationContainer>
    </>
  );
});
