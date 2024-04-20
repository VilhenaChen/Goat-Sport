import { useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";

export const useVerifyMobileView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile) {
      navigate("/error-web");
    }
  }, [navigate]);
};
