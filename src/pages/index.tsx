/** @jsx jsx */
import { Box, Flex } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import MenuButton from "../components/MenuButton/MenuButton";

// markup
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
    </Flex>
  );
};

export default IndexPage;
