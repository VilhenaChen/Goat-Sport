import { memo } from "react";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../hooks/useVerifyUserLogin";
import CalendarPresentation from "./CalendarPresentation";

const CalendarContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();
  return <CalendarPresentation />;
});

export default CalendarContainer;
