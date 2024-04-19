import React from "react";
import { styled } from "@mui/material";

const ShadowContainer = styled("div")(({ width }: { width?: string }) => ({
  position: "absolute",
  display: "flex",
  flexDirection:"column",
  backgroundColor: "rgba(217,217,217,0.75)",
  padding: "32px",
  borderRadius: "40px",
  width: `${width ?? "250px"}`,
  gap: "16px",
}));

interface TranslucidContainerProps {
  children: React.ReactNode;
  width?: string;
}

export const TranslucidContainer = ({
  children,
  width,
}: TranslucidContainerProps) => {
  return <ShadowContainer width={width}>{children}</ShadowContainer>;
};
