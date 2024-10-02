import { useRouter } from "next/router";

const GlobalHeader = () => {
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = () => {
    router.push(`/`);
  };

  return (
    <div className="container">
      <div className="title" onClick={() => clickRouter()}>
        むちむち無知の知くんのサイト
      </div>
      <hr className="hr" />
      <style jsx>{`
        .container {
          width: 900px;
          margin: 0 auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-size: 48px;
          font-weight: normal;
          font-family: "Zen Maru Gothic";
          margin: 10px 0;
        }
        .title:hover {
          cursor: pointer;
        }
        .hr {
          width: 100%;
          border-bottom: 0.5px solid black;
          box-shadow: 0 3px 5px 1px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};
export default GlobalHeader;

GlobalHeader.displayName = "../components/GlobalHeader";
