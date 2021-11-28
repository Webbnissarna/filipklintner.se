/** @jsx jsx */
import { Flex } from "@theme-ui/components";
import { jsx } from "@theme-ui/core";
import MenuButton from "../components/MenuButton/MenuButton";

// markup
const IndexPage = () => {
  return (
    <Flex sx={{ flexDirection: "column" }}>
      <MenuButton></MenuButton>
    </Flex>
  );
};

export default IndexPage;
