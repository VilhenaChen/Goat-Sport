import { Button, TextField } from "@mui/material";
import { memo } from "react";
import styled from "styled-components";
import { BottomMenu } from "../../../components/BottomMenu";
import { HeaderContainer } from "../../../components/Header";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
const PageContainer = styled("div")({
  height: "100%",
  position: "relative",
  overflowY: "hidden",
  marginTop: "90px",
  padding: "16px 36px 88px 36px",
});

const ContentContainer = styled("div")({
  display: "flex",
  flexDirection: "column",

  gap: "32px",
});

const ActionContainer = styled("div")({
  position: "absolute",
  bottom: "100px",
  left: "0",
  right: "0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "16px",
});

const Textarea = styled(BaseTextareaAutosize)(
  () => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: #434D5B;
  background: #fff;
  border: 1px solid #C7D0DD;
  box-shadow: 0px 2px 2px #E5EAF2};

  &:hover {
    border-color: #3399FF;
  }

  &:focus {
    outline: 0;
    border-color: #3399FF;
    box-shadow: 0 0 0 3px #0072E5;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const ActionButton = styled(Button)({});

interface AddNotePresentationProps {
  onClickAddNote: () => void;
}

export const AddNotePresentation = memo(
  ({ onClickAddNote }: AddNotePresentationProps) => {
    return (
      <PageContainer>
        <HeaderContainer title="Add Note" backgroundColor="#FFFFFF" />
        <ContentContainer>
          <TextField id="standard-basic" label="Title" variant="standard" />
          <Textarea
            id="standard-basic"
            minRows={10}
            maxRows={30}
            placeholder="Your Note Here.."
          />
          <ActionContainer>
            <ActionButton
              variant="contained"
              color="success"
              onClick={onClickAddNote}
            >
              Add Note
            </ActionButton>
          </ActionContainer>
        </ContentContainer>
        <BottomMenu />
      </PageContainer>
    );
  }
);
