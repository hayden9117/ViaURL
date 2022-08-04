import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import useViaToken from "../components/UseViaToken";
import useConfig from "../components/CreatePageComponents/UseConfig";
import { SessionProvider } from "next-auth/react";
// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {
    session,
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props;
  // const { token, setToken } = useViaToken();
  // const { config, setConfig } = useConfig();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={session}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, 
                consistent, and simple baseline to
                build upon. */}

          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
