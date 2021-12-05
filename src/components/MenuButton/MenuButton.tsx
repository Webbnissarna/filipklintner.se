import { motion } from "framer-motion";
import React from "react";

interface IMenuButton {
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  onClick: () => void;
  isOpen: boolean;
}

export default function MenuButton({
  width = 22,
  height = 22,
  backgroundColor = "#980707",
  color = "#DFDFDF",
  onClick,
  isOpen,
}: IMenuButton) {
  return (
    <motion.svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
      xmlns={"http://www.w3.org/2000/motion.svg"}
      onClick={onClick}
      variants={{
        closed: {},
        open: {},
      }}
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.rect width={22} height={22} rx={11} fill={backgroundColor} />
      <motion.path
        variants={{
          closed: { d: "M 5 6 L 17 6" },
          open: { d: "M7 7L15.4853 15.4853" },
        }}
        strokeWidth={2}
        stroke={color}
      />
      <motion.path
        variants={{
          closed: { d: "M 5 11 L 17 11" },
          open: { strokeWidth: 0 },
        }}
        transition={{ duration: 0.1 }}
        strokeWidth={2}
        stroke={color}
      />
      <motion.path
        variants={{
          closed: { d: "M 5 16 L 17 16" },
          open: { d: "M7 15.4853L15.4853 7.00001" },
        }}
        strokeWidth={2}
        stroke={color}
      />
    </motion.svg>
  );
}
