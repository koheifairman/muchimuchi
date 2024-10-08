import GlobalHeader from "../components/GlobalHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import breadcrumbsStyles from "@/styles/breadcrumbs/breadcrumbs1.module.css";
import ContactMain from "../components/contact/ContactMain";
import Head from "next/head";

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
    label: "Contact",
    path: undefined,
  },
];

const contact = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <ContactMain />

      <Head>
        <title>Contact</title>
        <meta name="description" content="連絡先ページ。" />
        <meta
          property="og:title"
          content="Contact | むちむち無知の知くんのサイト"
        />
        <meta property="og:description" content="連絡先ページ。" />
        <meta
          property="og:url"
          content="https://muchimuchi.vercel.app/contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact | むちむち無知の知くんのサイト"
        />
        <meta name="twitter:description" content="連絡先ページ。" />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/muchimuchi_bucket/global/og-image.webp"
        />
        <link rel="canonical" href="https://muchimuchi.vercel.app/contact" />
      </Head>
    </div>
  );
};

export default contact;

contact.displayName = "/contact";
