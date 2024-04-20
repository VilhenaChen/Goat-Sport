import React, { useCallback } from "react";
import { Button, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const Header = styled("div")(() => ({
    position:"fixed",
    minWidth: "10px",
    display:"flex",
    flexDirection:"row",
    flexWrap:"nowrap",
    top: "16px",
    left: "16px",
    right: "50px",
    alignItems:"center"
  }));

  
const Btn = styled(Button)(() => ({
  minWidth: "auto",
}));


const Text = styled(Typography)(() => ({
  overflowWrap: "break-word"
}));

  interface HeaderContainerProps {
    isLogout?:boolean;
    title?:string;
  }

  export const HeaderContainer = ({
    isLogout, title
  }: HeaderContainerProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
  const logoutUser = useCallback(() => {
    dispatch(userActions.logoutUser());
    navigate("/");
  },[]);
  const backAction = useCallback(() => {
    navigate(-1);
  },[]);


    return (
    <Header>
      <Btn onClick={isLogout ? logoutUser : backAction}><ArrowBackIosRoundedIcon style={{fontSize: "2rem"}}/></Btn>
      {title ? <Text className="title">{title}</Text> : null}
    </Header>
    );
  };
  