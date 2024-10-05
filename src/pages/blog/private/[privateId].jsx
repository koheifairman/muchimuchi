import fs from "fs"; // fs：Node.jsのモジュール。ファイルシステム。
import path from "path"; //path：Node.jsのモジュール。
import matter from "gray-matter"; //matter：mdファイルのフロントマターをパース（解析、変換）する関数
import { serialize } from "next-mdx-remote/serialize"; //mdxの中身をNext.jsでレンダリングできる形式に、サーバーサイドでシリアライズ（変換）する関数
import { MDXRemote } from "next-mdx-remote"; //シリアライズされたMDXをクライアントサイドでレンダリングするコンポーネント
import Image from "next/image";
import Head from "next/head";

import GlobalHeader from "@/components/GlobalHeader";
import markdownStyles from "../../../styles/markdown.module.css";
import Maintenance from "@/components/Maintenance.jsx";

// getStaticPaths：クライアントサイドで事前に静的生成するページパスを指定
// path.join('a','b',...)：パス（/a/b/...）を動的生成
// fileDirectory = /~/articles/blogディレクトリ
// files = ['oasisreunon.mdx', ...]
// fileName = ['oasisreunon', ...]
// paths = {params: { privateId: 'oasisreunon' }, ...}
// paths（getStaticPathsの戻り値） = [{ params: { privateId: 'oasisreunon' } },{ params: { privateId: ...} }]
// fallback: false：指定されていないページ（pathsに含まれないパス）にアクセスされたら404ページ表示
export const getStaticPaths = async () => {
  const fileDirectory = path.join(process.cwd(), "articles", "blog");
  const files = fs.readdirSync(fileDirectory);

  const paths = files.map((filesArg) => {
    const fileName = filesArg.replace(/\.mdx$/, "");
    return {
      params: { privateId: fileName },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// filePath = ["/~/articles/blog/oasisreunion.mdx", ...]
// fileContent = ${params.privateId}.mdxの中身全体
// data = fileContentのフロントマター部分
// content = fileContentの本文部分
// mdxSource = contentをJSXに変換
// frontMatter（プロップス） =　data
// mdxSource（プロップス） = mdxSource
export const getStaticProps = async ({ params }) => {
  const filePath = path.join(
    process.cwd(),
    "articles",
    "blog",
    `${params.privateId}.mdx`,
  );

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
};

// カスタムコンポーネント
const components = {
  Thumbnail: (props) => <div className={markdownStyles.thumbnail} {...props} />,
  Subtitle: (props) => <div className={markdownStyles.subtitle} {...props} />,
  Maintenance,
  Image,
};

// （{...mdxSource}）：スプレッド構文。{mdxSource}内のすべてのプロパティ（content、カスタムコンポーネントなど）を<MDXRemote />に渡す。
const PrivatePost = ({ frontMatter, mdxSource }) => {
  return (
    <div>
      <GlobalHeader />
      <div className={markdownStyles.markdown}>
        <MDXRemote {...mdxSource} components={components} />
      </div>

      <Head>
        <title>{frontMatter.title}</title>
        {/* <meta name="description" content="ブログ記事のページ。" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="ブログ記事" />
        <meta property="og:description" content="ブログ記事のページ。" /> */}
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="ブログ記事のページ。" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default PrivatePost;

PrivatePost.displayName = "./blog/private/[privateId]";
