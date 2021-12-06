import React from "react";
import Animate from "../Animate";

export default function Backdrop({ onClick }: { onClick: () => void }) {
  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    open: {
      opacity: 0.4,
    },
  };
  return (
    <Animate
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "backdrop",
      }}
      variants={animationVariants}
      initial={"hidden"}
      animate={"open"}
      exit={"hidden"}
      onClick={onClick}
    />
  );
}
