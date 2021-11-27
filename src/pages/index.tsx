/** @jsx jsx */
import { jsx } from "@theme-ui/core";

import { Box } from "@theme-ui/components";
import Animate from "../components/Animate";
// import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main>
      <Box sx={{ backgroundColor: "primaryScale.2" }}>Lite text</Box>
      <Animate sx={{ padding: "1rem", backgroundColor: "primaryScale.3" }}>
        Big box with color
      </Animate>
    </main>
  );
};

export default IndexPage;
