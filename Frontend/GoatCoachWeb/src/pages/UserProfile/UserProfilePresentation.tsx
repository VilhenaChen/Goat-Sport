import { Button, Typography } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/coach-icon.svg";
import { BottomMenu } from "../../components/BottomMenu";
import { HeaderContainer } from "../../components/Header";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  paddingBottom: "80px",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "16px 36px",
});

const StyledProfileIcon = styled("img")({
  width: "90px",
  alignSelf: "center",
});

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",

  gap: "32px",
});

const ButtonsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginTop: "32px",
});

const InfoContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const ActionButton = styled(Button)({
  alignSelf: "center",
  width: "136px",
});

interface UserProfilePresentationProps {
  name: string;
  age: number;
  email: string;
  onClickLogout: () => void;
  onClickDelete: () => void;
}

export const UserProfilePresentation = memo(
  ({
    name,
    age,
    email,
    onClickLogout,
    onClickDelete,
  }: UserProfilePresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Manager Details" />
        <ContentContainer>
          <StyledProfileIcon src={ProfileIcon} alt="Profile" />
          <InfoContainer>
            <Typography className="label">Name:</Typography>
            <Typography className="value">{name}</Typography>
            <Typography className="label">Age:</Typography>
            <Typography className="value">{age}</Typography>
            <Typography className="label">Email:</Typography>
            <Typography className="value">{email}</Typography>
          </InfoContainer>
          <ButtonsContainer>
            <ActionButton variant="contained" href="/profile/edit">
              Edit
            </ActionButton>
            <ActionButton
              variant="contained"
              color="error"
              onClick={onClickDelete}
            >
              Delete
            </ActionButton>
            <ActionButton variant="contained" onClick={onClickLogout}>
              Logout
            </ActionButton>
          </ButtonsContainer>
        </ContentContainer>
        <BottomMenu />
      </PageContainer>
    );
  }
);
