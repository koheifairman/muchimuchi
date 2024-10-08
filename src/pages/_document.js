import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
        <link
          rel="icon"
          href="https://storage.googleapis.com/muchimuchi_bucket/favicon.ico/favicon.webp"
        />
        <html lang="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="リベラルアーツ、音楽、イラスト、YouTube、Podcastなど、管理人の趣味活動をまとめたサイト。マスコットは「むちむち無知の知くん」。" />
        <meta name="keywords" content="むちむち無知の知くんのサイト, リベラルアーツ, 音楽, イラスト, ブログ, YouTube, Podcast" />
        <meta property="og:title" content="むちむち無知の知くんのサイト" />
        <meta property="og:description" content="リベラルアーツ、音楽、イラスト、YouTube、Podcastなど、管理人の趣味活動をまとめたサイト。マスコットは「むちむち無知の知くん」。" />
        <meta property="og:image" content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp" />
        <meta property="og:url" content="https://muchimuchi.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@waraigero" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="リベラルアーツ、音楽、イラスト、YouTube、Podcastなど、管理人の趣味活動をまとめたサイト。マスコットは「むちむち無知の知くん」。" />
        <meta name="twitter:image" content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp" />
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
