import { Flex } from "@theme-ui/components";
import React from "react";

export default function Footer() {
  return (
    <Flex
      as="footer"
      sx={{
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "sans",
        fontSize: "footer",
        letterSpacing: "0.4rem",
        flexGrow: 1,
        justifyContent: "flex-end",
        paddingBottom: "lg",
      }}
    >
      {/* <Box as="hr" sx={{ width: "100%", height: 1 }} /> */}
      mail@good.times
    </Flex>
  );
}
