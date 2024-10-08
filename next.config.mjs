import withMDX from "@next/mdx";
import nextSitemap from './next-sitemap.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],  // MDXファイルをサポート
  images: {
    domains: ['storage.googleapis.com'],  // google cloud strage
  },
};

// withMDXとwithSitemapをチェーン（順序：MDX設定 => サイトマップ設定）
export default withMDX()(nextConfig, nextSitemap);
