import * as React from "react";

import { motion } from "framer-motion";
import { Box, Text } from "theme-ui";

export default function NotFoundPage() {
  const variants = {
    hidden: {
      pathLength: 0.0,
    },
    visible: {
      pathLength: 1.0,
      transition: {
        duration: 1,
      },
    },
  };
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
          <motion.path
            xlinkHref={"#svg__n"}
            stroke={"#000"}
            strokeWidth={2}
            clipPath={"url(#svg__n__clip)"}
            d="M 0 10 L 0 0 L 10 10 L 10 0 M 15 0"
            // strokeLinecap={"butt"}
            strokeLinejoin={"bevel"}
            variants={variants}
            strokeDasharray={"0 0"}
            initial={"hidden"}
            animate={"visible"}
          />
          <motion.path
            stroke={"#000"}
            strokeWidth={2}
            xlinkHref={"#svg__o"}
            clipPath={"url(#svg__o__clip)"}
            d={
              "M15 0C 15 0 10 0 10 5 C 10 10 15 10 15 10 C 15 10 20 10 20 5 C 20 0 15 0 15 0"
            }
            variants={variants}
            initial="hidden"
            animate="visible"
            strokeDasharray={"0 1"}
          />
        </motion.g>
      </motion.svg>
      <Text sx={{ textAlign: "center", display: "block", fontFamily: "sans" }}>
        page was found
      </Text>
    </Box>
  );
}
