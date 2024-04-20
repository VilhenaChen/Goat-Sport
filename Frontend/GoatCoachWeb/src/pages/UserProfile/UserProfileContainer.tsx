import { memo, useCallback, useState } from "react";
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

  const [profileTabChosen, setProfileTabChosen] = useState<string>("Info");

  const handleProfileTabChange = useCallback((tab: string) => {
    setProfileTabChosen(tab);
  }, []);

  return (
    <UserProfilePresentation
      name="Rogério Shaimite"
      age={18}
      email="test@gmail.com"
      teamName="test"
      sports={["Football", "Soccer"]}
      profileTabChosen={profileTabChosen}
      onClickLogout={handleLogout}
      onClickDeleteUser={handleDelete}
      onChangeTab={handleProfileTabChange}
    />
  );
});

export default UserProfileContainer;
