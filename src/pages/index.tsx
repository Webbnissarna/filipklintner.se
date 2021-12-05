/** @jsx jsx */
import { Box, Flex } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import MenuButton from "../components/MenuButton/MenuButton";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

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

  console.log("page data", pageData);

  //states
const IndexPage = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "xs",
      }}
    >
      <Box sx={{ cursor: "pointer" }}>
        <MenuButton></MenuButton>
      </Box>
      {pageData?.heroImage && (
        <Box sx={{ padding: "3xl" }}>
          <GatsbyImage
            image={pageData?.heroImage?.gatsbyImageData}
            alt={pageData?.heroImage?.alt}
          />
        </Box>
      )}
    </Flex>
  );
}
