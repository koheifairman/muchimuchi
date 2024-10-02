import Image from "next/image";

import maintenanceImage from "../../public/maintenance.webp";
import borderStyles from "@/styles/illustBorder.module.css";

const Maintenance = () => {
  return (
    <div className="container">
      <div className="image-container">
        <Image
          src={maintenanceImage}
          alt="メンテナンス画像"
          width={350}
          height={350}
          layout="intrinsic"
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
