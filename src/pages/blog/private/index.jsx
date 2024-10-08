import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import GlobalHeader from "../../../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs2.module.css";
import IndexMain from "../../../components/blog/private/IndexMain";

// fileDirectory = /~/articles/blogディレクトリ
// files =　['oasisreunion.mdx', ...]
// filePath = ["/~/articles/blog/oasisreunion.mdx", ...]
// fileContent = filePathの中身全体
// data = fileContentのフロントマター部分
// content = fileContentの本文部分
// slug = ['oasisreunion', ...]
// frontMatter = data
// content = content
// posts = {oasisreunion.mdx{slug:oasisreunion, frontMatter:〜, content:〜}, ...}
// postsをプロップスにする
export const getStaticProps = async () => {
  const fileDirectory = path.join(process.cwd(), "articles", "blog");
  const files = fs.readdirSync(fileDirectory);

  const posts = files.map((fileArg) => {
    const filePath = path.join(fileDirectory, fileArg);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug: fileArg.replace(".mdx", ""),
      frontMatter: data,
      content,
    };
  });

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
        <meta name="description" content="ブログ記事一覧ページ。" />
        <meta
          property="og:title"
          content="私的なこと | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="ブログ記事一覧ページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/blog/private"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="私的なこと | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="ブログ記事一覧ページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link
          rel="canonical"
          href="https://muchimuchi.vercel.app/blog/private"
        />
      </Head>
    </div>
  );
};

export default PrivateIndex;

PrivateIndex.displayName = "./blog/private/index";
