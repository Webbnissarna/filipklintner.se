import { Box } from "@theme-ui/components";
import React from "react";

import { navigate } from "gatsby";

export default function MenuLink({
  children,
  to,
  onClick,
}: {
  children?: React.ReactNode;
  to: string;
  onClick: () => void;
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
        onClick();
        navigate(to);
      }}
    >
      {children}
    </Box>
  );
}
