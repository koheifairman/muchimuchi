import "../styles/global.css";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

const GA_TRACKING_ID = "G-K1GH021HLQ"; // googleアナリティクスのトラッキングID

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        {/* Google Tag (gtag.js) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}');
                        `,
          }}
        />
        <title>むちむち無知の知くんのサイト</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

App.displayName = "/_app";
