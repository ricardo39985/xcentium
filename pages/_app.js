// pages/_app.js
import Head from "next/head";
import "../src/app/styles/global.scss";

function MyApp({ Component, pageProps }) {
  const pageTitle = "MiniFlix";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description" />
        <meta name="keywords" content="movie, film, entertainment" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
