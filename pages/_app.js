import App from "next/app";
import React, { useState, useRef, useEffect } from "react";
import { Provider } from "mobx-react";
import NoSSR from "react-no-ssr";
import { store } from "../store/store";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <div id="modal" />
        <NoSSR>
          <Provider {...store}>
            <Component {...pageProps} />
          </Provider>
        </NoSSR>
      </>
    );
  }
}
