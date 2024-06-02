// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports
import { createPortal } from "react-dom";

// #region Local Imports
import { Container, Top, TopText, Middle, MiddleLeft, MiddleLeftButtons, MiddleRight, Apod, ApodButton } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Heading, LocaleButton, Float, Navbar, Section1, Section2, SectionCall, Gallery, GalleryHover, Footer, MapSection } from "@Components";
// #endregion Local Imports
import { useState } from "react";

// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(1);
  const [isServer, setIsServer] = useState(true);

  console.log("home open", open);
  console.log("mode", mode);

  const removeModal = () => {
    if (open) setOpen(false);
  };

  return (
    <Container onClick={() => removeModal()}>
      <Float mode={mode} />
      <Section1 mode={mode} />
      <Section2 mode={mode} />
      <Gallery mode={mode} setOpen={setOpen} />
      <SectionCall />
      <MapSection />
      <Footer setMode={setMode} />
      <GalleryHover mode={mode} isOpen={open} setOpen={setOpen} />
    </Container>
  );
};

Home.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IHomePage.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default Home;
