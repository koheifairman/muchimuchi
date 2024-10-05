import "../styles/global.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://storage.googleapis.com/muchimuchi_bucket/favicon.ico/favicon.webp"
        />
        <html lang="ja" />
        <meta
          name="description"
          content="リベラルアーツ、音楽、イラストなど、管理人の趣味活動をまとめたサイト。マスコットは「むちむち無知の知くん」。"
        />
        <meta
          name="keywords"
          content="リベラルアーツ, 音楽, イラスト, ブログ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="むちむち無知の知くんのサイト" />
        {/* <meta property="og:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}

        {/* <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "むちむち無知の知くんのサイト",
    "url": "https://mywebsite.com/"
  }
`}
        </script> */}
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Abel&display=swap);
          @import
          url(https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap);
          @import
          url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
          {/* {`
      @font-face {
        font-family: 'jtak00b';
        src: url('/font/jtak00b.ttc') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `} */}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

App.displayName = "/_app";
