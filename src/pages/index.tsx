/** @jsx jsx */
import { Box, Flex, Text } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Fragment } from "react";

import ReactMarkdown from "react-markdown";

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

  return (
    <Fragment>
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
        {pageData?.description && (
          <ReactMarkdown>{pageData?.description}</ReactMarkdown>
        )}
      </Flex>
    </Fragment>
  );
}
