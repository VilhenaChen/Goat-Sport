import { memo } from "react";
import { RegisterPagePresentation } from "./RegisterPagePresentation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userSlice";

export const RegisterPageContainer = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
  const handleRegister = () => {
    //TODO
    dispatch(userActions.loginUser({name:"TEST", teamName:"TEST", token:"TEST"} ));
    navigate("/choose-sport");
  };

  return <RegisterPagePresentation handleRegister={handleRegister} />;
});
