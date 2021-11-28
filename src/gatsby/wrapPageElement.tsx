import React from "react";

import Header from "../components/Header";

import { GatsbyBrowser, GatsbySSR } from "gatsby";

type WrapPageElement =
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"];

export const wrapPageElement: WrapPageElement = ({ element, props }: never) => {
  return (
    <div>
      <Header />
      <main>{element}</main>
    </div>
  );
};
