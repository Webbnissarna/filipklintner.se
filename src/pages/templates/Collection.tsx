import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

import { Box, Flex, Grid, Text } from "theme-ui";

type TImage = {
  alt: string;
  gatsbyImageData: IGatsbyImageData;
  title: string;
  tags: Array<string>;
  originalId: number;
  resolutions: {
    aspectRatio: number;
  };
};

interface ICollection {
  title: string;
  description?: string;
  gallery: Array<TImage>;
  slug: string;
}

export default function Collection({
  pageContext,
}: {
  pageContext: ICollection;
}) {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        paddingX: "4xl",
      }}
    >
      <Text
        as="h1"
        sx={{
          fontFamily: "sans",
          fontSize: "h1",
          letterSpacing: "h1",
          paddingTop: "xl",
          paddingBottom: "md",
        }}
      >
        {pageContext.title}
      </Text>
      {pageContext?.description && (
        <Text as={"p"} sx={{ fontSize: "p", paddingBottom: "md" }}>
          {pageContext.description}
        </Text>
      )}
      <Grid columns={[2]}>
        {pageContext.gallery.map((image, idx) => {
          return (
            <Box
              sx={{ gridColumn: idx % 3 === 0 ? "span 2" : "span 1" }}
              key={image.originalId}
            >
              <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
            </Box>
          );
        })}
      </Grid>
    </Flex>
  );
}
