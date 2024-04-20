import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";

export const useVerifyUserLogin = () => {
  const isLoggedIn = useAppSelector((state) => state.loggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
};
