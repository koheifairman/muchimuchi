import { useRouter } from "next/router";

const IndexHeader = () => {
  // データ
  const listItems = [
    {
      id: 1,
      label: "Blog",
      path: "/blog",
    },
    {
      id: 2,
      label: "YouTube",
      path: "/youtube",
    },
    {
      id: 3,
      label: "Podcast",
      path: "/podcast",
    },
    {
      id: 4,
      label: "About",
      path: "/about",
    },
    {
      id: 5,
      label: "Contact",
      path: "/contact",
    },
  ];
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = (listItemsArg) => {
    router.push(`${listItemsArg.path}`);
  };

  return (
    <div className="container">
      <ul className="list">
        {listItems.map((listItemsArg) => {
          return (
            <li
              className="list-item"
              key={listItemsArg.id}
              onClick={() => clickRouter(listItemsArg)}
            >
              {listItemsArg.label}
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .container {
          width: 900px;
          margin: 0 auto;
        }
        .list {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .list-item {
          font-family: "Zen Maru Gothic";
          font-size: 32px;
          font-weight: 400;
        }
        .list-item:hover {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};
export default IndexHeader;

IndexHeader.displayName = "../components/index/IndexHeader";
