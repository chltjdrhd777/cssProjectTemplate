import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const mainCSS = (function () {
  class CSSMaker {
    readonly masterMain = css``;
  }

  return new CSSMaker();
})();

const { masterMain } = mainCSS;

function index() {
  return (
    <main className={masterMain}>
      <div className="container"></div>
    </main>
  );
}

export default index;
