import { Box } from "@theme-ui/components";
import React from "react";

import { navigate } from "gatsby";

export default function MenuLink({
  children,
  to,
}: {
  children?: React.ReactNode;
  to: string;
}) {
  return (
    <Box
      as="a"
      sx={{
        letterSpacing: "0.2rem",
        fontFamily: "sans",
        cursor: "pointer",
      }}
      onClick={() => {
        navigate(to);
      }}
    >
      {children}
    </Box>
  );
}
