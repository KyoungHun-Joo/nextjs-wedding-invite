// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
import { makeStore } from "@Redux";

// #endregion Global Imports

// #region Local Imports

import { theme } from "@Definitions/Styled";
import { AppWithStore } from "@Interfaces";
import "bootstrap-icons/font/bootstrap-icons.css";

import "@Static/css/main.scss";
//import "swiper/swiper.scss";

// #endregion Local Imports

class WebApp extends App<AppWithStore> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default withRedux(makeStore)(WebApp);
