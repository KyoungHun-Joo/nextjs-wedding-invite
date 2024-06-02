// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { Container, TopText, ApodButton } from "@Styled/Home";
import Link from "next/link";
// #endregion Local Imports

// #region Interface Imports
import { IErrorPage } from "@Interfaces";
// #endregion Interface Imports

const Custom404: NextPage<IErrorPage.IProps> = () => {
  return (
    <Container>
      <TopText>{"common:NotFound"}</TopText>
      <Link href="/">
        <ApodButton>{"common:BackHome"}</ApodButton>
      </Link>
    </Container>
  );
};

export default Custom404;
