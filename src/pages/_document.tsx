import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            type="text/javascript"
            src="https://unpkg.com/default-passive-events@2.0.0/dist/index.umd.js"
            crossOrigin="anonymous"
          />
          <meta name="application-name" content="Your Medicine Online" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Your Medicine Online"
          />
          <meta
            name="description"
            content="Helping people find medications out of stock for less."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          {/* <meta name="msapplication-config" content="/icons/browserconfig.xml" /> */}
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#123087" />

          <link
            rel="apple-touch-icon"
            href="https://yourmedicine.online/touch-icon-iphone.png"
          />
          {/* <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
<link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" /> */}

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://yourmedicine.online/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://yourmedicine.online/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="https://yourmedicine.online/safari-pinned-tab.svg"
            color="#000000"
          />
          <link
            rel="shortcut icon"
            href="https://yourmedicine.online/favicon.ico"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://yourmedicine.online/" />
          <meta name="twitter:title" content="Your Medicine Online" />
          <meta
            name="twitter:description"
            content="Helping people find medications out of stock for less."
          />
          <meta
            name="twitter:image"
            content="https://yourmedicine.online/android-chrome-192x192.png"
          />
          <meta name="twitter:creator" content="@xtealer" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Your Medicine Online" />
          <meta
            property="og:description"
            content="Helping people find medications out of stock for less."
          />
          <meta property="og:site_name" content="Your Medicine Online" />
          <meta property="og:url" content="https://www.yourmedicine.online/" />
          <meta
            property="og:image"
            content="https://www.yourmedicine.online/og-image.jpg"
          />
          <meta property="og:image:type" content="image/jpg" />
          <meta
            property="og:image:url"
            content="https://www.yourmedicine.online/og-image.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="fb:app_id" content="3272783966308179" />
          {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
