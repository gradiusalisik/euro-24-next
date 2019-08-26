import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <link
            sizes="32x32"
            href="static/favicon/32x32.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="57x57"
            href="static/favicon/57x57.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="76x76"
            href="static/favicon/76x76.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="96x96"
            href="static/favicon/96x96.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="120x120"
            href="static/favicon/120x120.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="120x120"
            href="static/favicon/120x120.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="152x152"
            href="static/favicon/152x152.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="152x152"
            href="static/favicon/152x152.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="167x167"
            href="static/favicon/167x167.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="167x167"
            href="static/favicon/167x167.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="180x180"
            href="static/favicon/180x180.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="180x180"
            href="static/favicon/180x180.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="195x195"
            href="static/favicon/195x195.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="195x195"
            href="static/favicon/195x195.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="195x196"
            href="static/favicon/195x196.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="195x196"
            href="static/favicon/195x196.png"
            rel="icon"
            type="image/png"
          />
          <link
            sizes="228x228"
            href="static/favicon/228x228.png"
            rel="icon"
            type="image/png"
          />
          <link rel="manifest" href="static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
