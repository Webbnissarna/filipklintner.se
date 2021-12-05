import React from "react";
import Animate from "../Animate";

export default function MenuLinkContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const animationVariants = {
    hidden: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };
  return (
    <Animate
      sx={{
        display: "flex",
        listStyle: "none",
        margin: 0,
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        position: "absolute",
        top: 11,
        backgroundColor: "#FFFBF4",
        zIndex: -1,
        paddingX: "xl",
        paddingY: "lg",
      }}
      as="ul"
      variants={animationVariants}
      initial={"hidden"}
      animate={"open"}
      exit={"hidden"}
    >
      {children}
    </Animate>
  );
}
