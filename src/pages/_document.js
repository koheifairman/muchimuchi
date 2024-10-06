import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
        <link
            rel="icon"
            href="https://storage.googleapis.com/muchimuchi_bucket/favicon.ico/favicon.webp"
            />
        <html lang="ja" />
        <meta name="description" content="リベラルアーツ、音楽、イラストなど、管理人の趣味活動をまとめたサイト。マスコットは「むちむち無知の知くん」。" />
        <meta name="keywords" content="リベラルアーツ, 音楽, イラスト, ブログ" />
        <meta property="og:type" content="website" />
        <style>
            @import
            url(https://fonts.googleapis.com/css2?family=Abel&display=swap);
            @import
            url(https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300;400;500;700;900&display=swap);
            @import
            url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
        </style>
    </Head>
    
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

Document.displayName = "/_document";
