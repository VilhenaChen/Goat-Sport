import { memo, useCallback} from "react";
import { useVerifyMobileView } from "../../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../../hooks/useVerifyUserLogin";
import { AddNotePresentation } from "./AddNotePresentation";

export const AddNoteContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();


  const onClickAddNote = useCallback(() => {
    //TODO
  }, []);

  return (
    <AddNotePresentation
     onClickAddNote={onClickAddNote}
    />
  );
});