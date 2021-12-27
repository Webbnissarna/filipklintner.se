import * as React from "react";

import { motion } from "framer-motion";
import { Box } from "theme-ui";

export default function NotFoundPage() {
  return (
    <Box sx={{ paddingX: "md" }}>
      <motion.svg
        viewBox="0 0 20 15"
        fill="none"
        xmlns={"http://www.w3.org/2000/motion.svg"}
        id="svg__no"
      >
        <motion.defs>
          <motion.path id={"svg__n"} d="M 0 10 L 0 0 L 10 10 L 10 0 M 15 0" />
          <motion.path
            id={"svg__o"}
            d={
              "M15 0C 15 0 10 0 10 5 C 10 10 15 10 15 10 C 15 10 20 10 20 5 C 20 0 15 0 15 0"
            }
          />
          <motion.clipPath id="svg__n__clip">
            <motion.use xlinkHref={"#svg__n"} />
          </motion.clipPath>
          <motion.clipPath id="svg__o__clip">
            <motion.use xlinkHref={"#svg__o"} />
          </motion.clipPath>
        </motion.defs>
        <motion.g>
          <motion.use
            xlinkHref={"#svg__n"}
            stroke={"#000"}
            strokeWidth={2}
            clipPath={"url(#svg__n__clip)"}
            // strokeLinecap={"butt"}
            strokeLinejoin={"bevel"}
          />
          <motion.use
            stroke={"#000"}
            strokeWidth={2}
            xlinkHref={"#svg__o"}
            clipPath={"url(#svg__o__clip)"}
          />
        </motion.g>
      </motion.svg>
    </Box>
  );
}
