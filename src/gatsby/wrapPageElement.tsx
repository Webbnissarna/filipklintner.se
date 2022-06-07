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
                  onClick={() => toggleNavigation(toggleNav, navIsOpen)}
                  isOpen={navIsOpen}
                />
              </Box>
              {navIsOpen ? (
                <MenuLinkContainer key={"linkContainer"}>
                  <MenuLink
                    onClick={() => toggleNavigation(toggleNav, navIsOpen)}
                    to={"/about"}
                  >
                    About
                  </MenuLink>
                  <MenuLink
                    onClick={() => toggleNavigation(toggleNav, navIsOpen)}
                    to={"/sketches"}
                  >
                    Sketches
                  </MenuLink>
                  <MenuLink
                    onClick={() => toggleNavigation(toggleNav, navIsOpen)}
                    to={"/paintings"}
                  >
                    Paintings
                  </MenuLink>
                  <MenuLink
                    onClick={() => toggleNavigation(toggleNav, navIsOpen)}
                    to={"/exhibitions"}
                  >
                    Exhibitions
                  </MenuLink>
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

function toggleNavigation(
  toggle: (val: boolean) => void,
  value: boolean
): void {
  toggle(!value);
}

export const wrapPageElement: WrapPageElement = ({ element }: never) => {
  return <Wrapper>{element}</Wrapper>;
};
