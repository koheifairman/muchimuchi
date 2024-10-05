import Image from "next/image";

const YoutubeMain = () => {
  // データ
  const items = [
    {
      id: 1,
      title: "リベラル・アーツ解説系",
      labelParts: ["むちむち無知の知くん", "【リベラル・アーツ】"],
      src: "/about/about-mascot-icon.webp",
      path: "https://www.youtube.com/",
      alt: "リベラル・アーツ解説系アイコン",
    },
    {
      id: 2,
      title: "音楽系",
      labelParts: ["初心者を見守る", "チャンネル"],
      src: "/youtube/youtube-liberalarts-icon.webp",
      path: "https://www.youtube.com/",
      alt: "音楽系アイコン",
    },
  ];

  return (
    <div className="container">
      <div className="list">
        {items.map((itemArg) => {
          return (
            <div key={itemArg.id} className="list-item">
              <p className="title">{itemArg.title}</p>
              <a
                className="image-container"
                href={itemArg.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={itemArg.src}
                  alt={itemArg.alt}
                  width={150}
                  height={150}
                />
              </a>
              <div className="label">
                {itemArg.labelParts.map((labelArg, index) => {
                  return <div key={index}>{labelArg}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          margin: 0 auto 0 auto;
        }
        .list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          width: 600px;
          margin: 0 auto;
        }
        .list-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 300px;
        }
        .title {
          font-family: "Zen Maru Gothic";
          font-size: 24px;
          font-weight: 400;
          text-align: center;
        }
        .image-container {
          width: 150px;
          height: 150px;
          text-align: center;
          cursor: pointer;
        }
        .label {
          font-family: "Robot";
          font-size: 24px;
          font-weight: 700;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default YoutubeMain;

YoutubeMain.displayName = "../components/music/YoutubeMain";
