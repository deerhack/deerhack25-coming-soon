import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold } from "@/app/utils/fonts";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div
      className={`h-screen  ${styles.hero_container} flex flex-col items-center pt-24 lg:pt-10 gap-3`}
    >
      <div className="h-fit">
        <MainLogo height={100} width={200} />
      </div>
      <p
        className={`text-3xl font-extrabold  text-primary-gradient-color-reverse h-fit ${cabinetBold.className}`}
      >
        Coming Soon
      </p>
    </div>
  );
}
