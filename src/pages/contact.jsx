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
      </Head>
    </div>
  );
};

export default contact;

contact.displayName = "/contact";
