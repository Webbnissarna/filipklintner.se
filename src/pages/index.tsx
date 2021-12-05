/** @jsx jsx */
import { Box, Flex } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import MenuButton from "../components/MenuButton/MenuButton";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useState } from "react";
import Backdrop from "../components/Backdrop";
import MenuLinkContainer from "../components/MenuButton/MenuLinkContainer";
import MenuLink from "../components/MenuButton/MenuLink";
import { AnimatePresence } from "framer-motion";

// markup
export default function IndexPage() {
  const pageQuery = useStaticQuery(
    graphql`
      query landingpage {
        datoCmsLandingpage(originalId: { eq: "79166934" }) {
          title
          description
          originalId
          heroImage {
            gatsbyImageData(placeholder: BLURRED)
            alt
          }
        }
      }
    `
  );

  const pageData = pageQuery?.datoCmsLandingpage;

  //states
  const [navIsOpen, toggleNav] = useState(false);
  console.log("nav is open", navIsOpen);
  return (
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
          <Box sx={{ cursor: "pointer" }}>
            <MenuButton
              onClick={() => toggleNav(!navIsOpen)}
              isOpen={navIsOpen}
            />
          </Box>
          {navIsOpen ? (
            <MenuLinkContainer key={"linkContainer"}>
              <MenuLink>About</MenuLink>
              <MenuLink>Sketches</MenuLink>
              <MenuLink>Paintings</MenuLink>
              <MenuLink>Exhibitions</MenuLink>
            </MenuLinkContainer>
          ) : null}
        </Flex>
        {pageData?.heroImage && (
          <Box sx={{ padding: "3xl" }}>
            <GatsbyImage
              image={pageData?.heroImage?.gatsbyImageData}
              alt={pageData?.heroImage?.alt}
            />
          </Box>
        )}
        <Backdrop isOpen={navIsOpen} onClick={() => toggleNav(!navIsOpen)} />
      </AnimatePresence>
    </Flex>
  );
}
