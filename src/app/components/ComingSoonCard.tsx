import styles from "./styles.module.css";
import { cabinetExtraBold } from "@/app/utils/fonts";
import MainLogo from "@/app/assets/icons/MainLogo";
import { ReactElement } from "react";

export default function ComingSoonCard(): ReactElement {
  return (
    <div
      className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] lg:w-[35vw] xl:w-[30vw] h-[30vh] lg:h-[45vh] flex flex-col gap-7 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-2 py-3`}
    >
      <MainLogo height={100} width={400} />
      <div
        className={` ${cabinetExtraBold.className} text-center text-4xl text-primary-gradient-color`}
      >
        Coming Soon
      </div>
    </div>
  );
}
