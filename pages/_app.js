import App from "next/app";
import React, { useState, useRef, useEffect } from "react";
import { Provider } from "mobx-react";

import { store } from "../store/store";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Provider {...store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
