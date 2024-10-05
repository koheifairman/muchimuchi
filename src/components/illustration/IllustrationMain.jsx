import Image from "next/image";
import borderStyles from "@/styles/illustBorder.module.css";

const IllustrationMain = ({ images, artist }) => {
  return (
    <div className="container">
      <div className="title">{artist}</div>
      <div className="illust-container">
        {images.map((imagesArg) => {
          return (
            <div key={imagesArg.id} className="illust-inner-container">
              <Image
                src={imagesArg.src}
                alt={imagesArg.alt}
                width={400}
                height={imagesArg.height}
                className={borderStyles.image}
              />
              <div className="date">更新：{imagesArg.date}</div>
              <div className="comment">{imagesArg.comment}</div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          width: 900px;
          margin: 0 auto 0 auto;
        }
        .title {
          font-family: "Zen Maru Gothic";
          font-size: 48px;
          font-weight: 400;
          text-align: center;
          margin: 0 atuo 30px auto;
        }
        .illust-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .illust-inner-container {
          width: 400px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 30px;
        }
        .date {
          font-family: "Zen Maru Gothic";
          font-size: 16px;
          margin: 0 0 5px 0;
        }
        .comment {
          font-family: "Zen Maru Gothic";
          font-size: 16px;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default IllustrationMain;

IllustrationMain.displayName = "../components/IllustrationMain";
