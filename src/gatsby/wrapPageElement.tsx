import React from "react";

import { Box } from "@theme-ui/components";

import Header from "../components/Header";

import { GatsbyBrowser, GatsbySSR } from "gatsby";
import Footer from "../components/Footer";

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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main>{element}</main>
        <Footer />
      </Box>
    </Box>
  );
};
