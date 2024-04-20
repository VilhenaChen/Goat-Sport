import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { RegisterPagePresentation } from "./RegisterPagePresentation";

export const RegisterPageContainer = memo(() => {
  useVerifyMobileView();
  const navigate = useNavigate();

  const handleRegister = useCallback(() => {
    //TODO
    navigate("/");
  }, [navigate]);

  return <RegisterPagePresentation handleRegister={handleRegister} />;
});
