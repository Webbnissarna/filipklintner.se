import { Box } from "@theme-ui/components";
import React from "react";

export default function MenuLink({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      as="a"
      sx={{
        letterSpacing: "0.2rem",
        fontFamily: "sans",
        cursor: "pointer",
      }}
    >
      {children}
    </Box>
  );
}
