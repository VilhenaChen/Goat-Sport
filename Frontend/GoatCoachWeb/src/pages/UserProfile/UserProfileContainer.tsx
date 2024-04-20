import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useVerifyMobileView } from "../../hooks/useVerifyMobileView";
import { useVerifyUserLogin } from "../../hooks/useVerifyUserLogin";
import { userActions } from "../../store/userSlice";
import { UserProfilePresentation } from "./UserProfilePresentation";

const UserProfileContainer = memo(() => {
  useVerifyMobileView();
  useVerifyUserLogin();

  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(userActions.logoutUser());
  }, [dispatch]);

  const handleDelete = useCallback(() => {}, []);

  return (
    <UserProfilePresentation
      name="Rogério Shaimite"
      age={18}
      email="test@gmail.com"
      onClickLogout={handleLogout}
      onClickDelete={handleDelete}
    />
  );
});

export default UserProfileContainer;
