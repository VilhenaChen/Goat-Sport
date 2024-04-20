import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../store/userSlice";
import { LoginPagePresentation } from "./LoginPagePresentation";

export const LoginPageContainer = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = useCallback(() => {
    //TODO
    dispatch(
      userActions.loginUser({ name: "TEST", teamName: "TEST", token: "TEST" })
    );
    navigate("/");
  }, [dispatch, navigate]);

  return <LoginPagePresentation handleLogin={handleLogin} />;
});
