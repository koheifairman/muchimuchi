import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import GlobalHeader from "../../../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs2.module.css";
import IndexMain from "../../../components/blog/private/IndexMain";

export const getStaticProps = async () => {
  const fileDirectory = path.join(process.cwd(), "articles", "blog");
  const files = fs.readdirSync(fileDirectory); //['oasisreunion.mdx', ...]取得

  const posts = files.map((fileArg) => {
    const filePath = path.join(fileDirectory, fileArg); // ['/Users/takiguchikouhei/dev/blog/src/pages/blog/private/articles/oasisreunion.mdx', ...]取得
    const fileContent = fs.readFileSync(filePath, "utf-8"); //readFileSync：指定パスのファイル内容を同期的に文字列として読み込む
    const { data, content } = matter(fileContent); // fileContent（例：oasisreunion.mdxを読み込んだ中身）を、data（フロントマター）とcontent（本文）で取得

    return {
      slug: fileArg.replace(".mdx", ""), //「.mdx」を削除したもの（例：oasisreunion）。パスの最後の部分
      frontMatter: data, //例：oasisreunion.mdxのフロントマター
      content, //例：oasisreunion.mdxの本文
    };
  });
  // posts = {oasisreunion.mdx{slug:oasisreunion, frontMatter:〜（titleやdateなど）, content:〜（本文）}, ...}

  // postsをpropsにする
  return {
    props: {
      posts,
    },
  };
};

const breadcrumbsItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: ">",
    path: undefined,
  },
  {
    id: 3,
    label: "Blog",
    path: "/blog",
  },
  {
    id: 4,
    label: ">",
    path: undefined,
  },
  {
    id: 5,
    label: "私的なこと",
    path: undefined,
  },
];

const PrivateIndex = ({ posts }) => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <IndexMain posts={posts} />

      <Head>
        <title>私的なこと</title>
        {/* <meta name="description" content="ブログ記事一覧のページ。" />
        <meta property="og:title" content="ブログ記事一覧" />
        <meta property="og:description" content="ブログ記事一覧のページ。" /> */}
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="ブログ記事一覧のページ。" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default PrivateIndex;

PrivateIndex.displayName = "./blog/private/index";
