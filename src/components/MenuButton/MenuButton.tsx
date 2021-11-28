import { motion } from "framer-motion";
import React from "react";

interface IMenuButton {
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
}

export default function MenuButton({
  width = 220,
  height = 220,
  backgroundColor = "#980707",
  color = "#DFDFDF",
}: IMenuButton) {
  return (
    <motion.svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 22 22"
      xmlns={"http://www.w3.org/2000/motion.svg"}
    >
      <motion.rect width={22} height={22} rx={11} fill={backgroundColor} />
      <motion.path d={"M 5 6 L 17 6"} strokeWidth={2} stroke={color} />
      <motion.path d={"M 5 11 L 17 11"} strokeWidth={2} stroke={color} />
      <motion.path d={"M 5 16 L 17 16"} strokeWidth={2} stroke={color} />
    </motion.svg>
  );
}

<svg
  width="22"
  height="22"
  viewBox="0 0 22 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="22" height="22" rx="11" fill="#980707" />
  <rect x="5" y="5" width="12" height="2" rx="1" fill="#DFDFDF" />
  <rect x="5" y="10" width="12" height="2" rx="1" fill="#DFDFDF" />
  <rect x="5" y="15" width="12" height="2" rx="1" fill="#DFDFDF" />
</svg>;
