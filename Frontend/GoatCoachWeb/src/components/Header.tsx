import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Button, Typography, styled } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/userSlice";

const Header = styled("div")(
  ({ backgroundColor }: { backgroundColor?: string }) => ({
    position: "fixed",
    minWidth: "10px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    top: 0,
    left: 0,
    right: 0,
    padding: "16px 58px 0px 16px",
    alignItems: "center",
    height: "72px",
    backgroundColor: backgroundColor ?? "transparent",
  })
);

const Btn = styled(Button)(() => ({
  minWidth: "auto",
}));

const Text = styled(Typography)(() => ({
  overflowWrap: "break-word",
}));

interface HeaderContainerProps {
  isLogout?: boolean;
  title?: string;
  backgroundColor?: string;
}

export const HeaderContainer = ({
  isLogout,
  title,
  backgroundColor,
}: HeaderContainerProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(userActions.logoutUser());
    navigate("/");
  }, [dispatch, navigate]);
  const backAction = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Header backgroundColor={backgroundColor}>
      <Btn onClick={isLogout ? logoutUser : backAction}>
        <ArrowBackIosRoundedIcon style={{ fontSize: "2rem" }} />
      </Btn>
      {title ? <Text className="title">{title}</Text> : null}
    </Header>
  );
};
