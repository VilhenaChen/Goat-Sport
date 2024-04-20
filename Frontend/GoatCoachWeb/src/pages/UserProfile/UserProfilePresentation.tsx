import { Button, Typography } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/coach-icon.svg";
import { BottomMenu } from "../../components/BottomMenu";
import { HeaderContainer } from "../../components/Header";
import TabsComponent from "../../components/TabsComponent";

const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "16px 36px 88px 36px",
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
  email: string;
  teamName: string;
  sports: string[];
  profileTabChosen: string;
  onClickLogout: () => void;
  onClickDeleteUser: () => void;
  onChangeTab: (tab: string) => void;
}

export const UserProfilePresentation = memo(
  ({
    name,
    email,
    teamName,
    sports,
    profileTabChosen,
    onClickLogout,
    onClickDeleteUser,
    onChangeTab,
  }: UserProfilePresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Manager Details" backgroundColor="#FFFFFF" />
        <ContentContainer>
          <StyledProfileIcon src={ProfileIcon} alt="Profile" />
          <TabsComponent
            activeTab={profileTabChosen}
            onTabClick={onChangeTab}
            tabs={["Info", "Team"]}
          />
          {profileTabChosen === "Info" ? (
            <InfoContainer>
              <div>
                <Typography className="label">Name:</Typography>
                <Typography className="value">{name}</Typography>
              </div>
              <div>
                <Typography className="label">Email:</Typography>
                <Typography className="value">{email}</Typography>
              </div>
            </InfoContainer>
          ) : (
            <InfoContainer>
              <div>
                <Typography className="label">Team Name:</Typography>
                <Typography className="value">{teamName}</Typography>
              </div>
              <div>
                <Typography className="label">Sports:</Typography>
                {sports.map((sport) => (
                  <Typography className="value">{sport}</Typography>
                ))}
              </div>
            </InfoContainer>
          )}
          <ButtonsContainer>
            <ActionButton variant="contained" href={`/profile/edit-user`}>
              Edit
            </ActionButton>
            <ActionButton
              variant="contained"
              color="error"
              onClick={onClickDeleteUser}
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
