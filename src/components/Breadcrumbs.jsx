import { useRouter } from "next/router";

const Breadcrumbs = ({ breadcrumbsItems, breadcrumbsStyles }) => {
  // データ
  const lastLabel = breadcrumbsItems[breadcrumbsItems.length - 1].label;
  // ステート
  const router = useRouter();
  // 関数
  const clickRouter = (breadcrumbsItemsArg) => {
    router.push(`${breadcrumbsItemsArg.path}`);
  };

  return (
    <div className="container">
      <ul className="list">
        {breadcrumbsItems.map((breadcrumbsItemsArg) => {
          return (
            <li
              key={breadcrumbsItemsArg.id}
              className={`${
                breadcrumbsStyles[`list-item-${breadcrumbsItemsArg.id}`]
              }`}
              onClick={() => clickRouter(breadcrumbsItemsArg)}
            >
              {breadcrumbsItemsArg.label}
            </li>
          );
        })}
      </ul>
      <div className="title">{lastLabel}</div>
      <style jsx>{`
        .container {
          width: 900px;
          margin: 0 auto 0 auto;
        }
        .list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
          padding: 0;
          list-style-type: none;
          margin: 0;
        }
        .title {
          font-family: "Zen Maru Gothic";
          font-size: 40px;
          font-weight: 400;
          text-align: center;
          margin: 20px auto 20px auto;
        }
      `}</style>
    </div>
  );
};
export default Breadcrumbs;

Breadcrumbs.displayName = "../components/Breadcrumbs";
