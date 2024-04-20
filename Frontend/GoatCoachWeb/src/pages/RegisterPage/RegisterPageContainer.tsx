import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterPagePresentation } from "./RegisterPagePresentation";

export const RegisterPageContainer = memo(() => {
  const navigate = useNavigate();

  const handleRegister = useCallback(() => {
    //TODO
    navigate("/");
  }, [navigate]);

  return <RegisterPagePresentation handleRegister={handleRegister} />;
});
