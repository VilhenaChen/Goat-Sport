import { memo, useCallback } from "react";
import { LoginPagePresentation } from "./LoginPagePresentation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

export const LoginPageContainer = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogin = useCallback(() => {
    //TODO
    dispatch(userActions.loginUser({name:"TEST", teamName:"TEST", token:"TEST"} ));
     navigate("/choose-sport");
  },[]);

  return <LoginPagePresentation handleLogin={handleLogin} />;
});
