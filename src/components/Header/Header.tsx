import { Flex, Text } from "@theme-ui/components";
import React from "react";

export default function Header({}) {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        width: "100%",
        backgroundColor: "beige",
        padding: "2xl",
      }}
    >
      <Text
        as={"h1"}
        sx={{
          letterSpacing: "0.5rem",
          fontFamily: "sans",
          fontSize: "18px",
          fontWeight: 300,
        }}
      >
        Filip Leo Klintner
      </Text>
    </Flex>
  );
}
