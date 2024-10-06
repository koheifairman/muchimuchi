import GlobalHeader from "../components/GlobalHeader";
import IndexHeader from "../components/index/IndexHeader";
import IndexMain from "../components/index/IndexMain";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <GlobalHeader />
      <IndexHeader />
      <IndexMain />

      <Head>
        <title>むちむち無知の知くんのサイト</title>
      </Head>
    </div>
  );
};

export default index;

index.displayName = "/";
