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
        {/* <meta name="description" content="連絡先ページ。" />
        <meta property="og:title" content="Contact" />
        <meta property="og:description" content="連絡先ページ。" /> */}
        {/* <meta property="og:url" content="https://mywebsite.com/" />
        <meta property="og:image" content="https://mywebsite.com/image.jpg" /> */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="むちむち無知の知くんのサイト" />
        <meta name="twitter:description" content="連絡先ページ。" /> */}
        {/* <meta name="twitter:image" content="https://mywebsite.com/image.jpg" />
        <link rel="canonical" href="https://mywebsite.com/" /> */}
      </Head>
    </div>
  );
};

export default contact;

contact.displayName = "/contact";
