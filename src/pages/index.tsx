/** @jsx jsx */
import { Box, Flex, Text } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import MenuButton from "../components/MenuButton/MenuButton";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useState } from "react";
import Backdrop from "../components/Backdrop";
import MenuLinkContainer from "../components/MenuButton/MenuLinkContainer";
import MenuLink from "../components/MenuButton/MenuLink";
import { AnimatePresence } from "framer-motion";

interface IPageData {
  title: string;
  description?: string;
  originalId: number;
  heroImage: {
    gatsbyImageData: IGatsbyImageData;
    alt: string;
  };
}

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

  const pageData: IPageData = pageQuery?.datoCmsLandingpage;

  //states
  const [navIsOpen, toggleNav] = useState(false);
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "xs",
      }}
      id={"index-page"}
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
              <MenuLink>About</MenuLink>
              <MenuLink>Sketches</MenuLink>
              <MenuLink>Paintings</MenuLink>
              <MenuLink>Exhibitions</MenuLink>
            </MenuLinkContainer>
          ) : null}
        </Flex>

        {pageData?.heroImage && (
          <Box
            sx={{ paddingX: "10%", paddingTop: "lg" }}
            key={"hero-image-padding"}
          >
            <GatsbyImage
              image={pageData?.heroImage?.gatsbyImageData}
              alt={pageData?.heroImage?.alt}
            />
          </Box>
        )}
        <Flex
          sx={{
            flexDirection: "column",
            alignItems: "center",
            paddingX: "10%",
            fontFamily: "sans",
          }}
        >
          <Text as="h1">{pageData.title}</Text>
          <Text as="p">{pageData?.description}</Text>
        </Flex>
        {navIsOpen ? (
          <Backdrop onClick={() => toggleNav(false)} key={"menu-backdrop"} />
        ) : null}
      </AnimatePresence>
    </Flex>
  );
}
