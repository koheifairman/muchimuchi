import Image from "next/image";
import borderStyles from "@/styles/illustBorder.module.css";

const Maintenance = () => {
  // データ
  const imageSrc =
    "https://storage.googleapis.com/muchimuchi_bucket/global/maintenance.webp";

  return (
    <div className="container">
      <div className="image-container">
        <Image
          src={imageSrc}
          alt="メンテナンス画像"
          width={350}
          height={358}
          className={borderStyles.image}
        />
      </div>
      <div className="title">整備中です。しばしお待ちを...</div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 900px;
          margin: 0 auto;
        }
        .image-container {
          width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-family: "Zen Maru Gothic";
          font-size: 40px;
          font-weight: 400;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Maintenance;

Maintenance.displayName = "../components/Maintenance";
