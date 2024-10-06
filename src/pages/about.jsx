import GlobalHeader from "../components/GlobalHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import breadcrumbsStyles from "../styles/breadcrumbs/breadcrumbs1.module.css";
import AboutMain from "../components/about/AboutMain";

// モジュール
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
    label: "About",
    path: undefined,
  },
];

const about = () => {
  return (
    <div>
      <GlobalHeader />
      <Breadcrumbs
        breadcrumbsItems={breadcrumbsItems}
        breadcrumbsStyles={breadcrumbsStyles}
      />
      <AboutMain />

      <Head>
        <title>About</title>
      </Head>
    </div>
  );
};

export default about;

about.displayName = "/about";
