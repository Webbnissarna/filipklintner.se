import React, { useState } from "react";

import { Box, Flex } from "@theme-ui/components";

import Header from "../components/Header";

import { GatsbyBrowser, GatsbySSR } from "gatsby";
import Footer from "../components/Footer";

import { AnimatePresence } from "framer-motion";
import MenuLinkContainer from "../components/MenuButton/MenuLinkContainer";
import MenuLink from "../components/MenuButton/MenuLink";
import MenuButton from "../components/MenuButton/MenuButton";
import Backdrop from "../components/Backdrop";

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

function Wrapper({ children }: { children: React.ReactNode }) {
  const [navIsOpen, toggleNav] = useState(false);
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
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "xs",
          }}
        >
          <AnimatePresence>
            <Flex
              id={`menu-nav`}
              sx={{
                zIndex: "overlay",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box sx={{ cursor: "pointer" }} key={"menu-button-container"}>
                <MenuButton
                  onClick={() => toggleNav(!navIsOpen)}
                  isOpen={navIsOpen}
                />
              </Box>
              {navIsOpen ? (
                <MenuLinkContainer key={"linkContainer"}>
                  <MenuLink to={"about"}>About</MenuLink>
                  <MenuLink to={"sketches"}>Sketches</MenuLink>
                  <MenuLink to={"paintings"}>Paintings</MenuLink>
                  <MenuLink to={"exhibitions"}>Exhibitions</MenuLink>
                </MenuLinkContainer>
              ) : null}
            </Flex>
            {navIsOpen ? (
              <Backdrop
                onClick={() => toggleNav(false)}
                key={"menu-backdrop"}
              />
            ) : null}
            {children}
          </AnimatePresence>
        </Flex>
        <Footer />
      </Box>
    </Box>
  );
}

export const wrapPageElement: WrapPageElement = ({ element }: never) => {
  return <Wrapper>{element}</Wrapper>;
};
