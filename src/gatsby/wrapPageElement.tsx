import React from "react";

import { Box } from "@theme-ui/components";

import Header from "../components/Header";

import { GatsbyBrowser, GatsbySSR } from "gatsby";

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

export const wrapPageElement: WrapPageElement = ({ element }: never) => {
  return (
    <Box id={"pagewrap"}>
      <Box
        sx={{
          borderStyle: "solid",
          borderColor: "brown",
          borderWidth: 3,
          minHeight: "100vh",
          // top: 0,
          // right: 0,
          // bottom: 0,
          // left: 0,
        }}
      >
        <Header />
        <main>{element}</main>
      </Box>
    </Box>
  );
};
