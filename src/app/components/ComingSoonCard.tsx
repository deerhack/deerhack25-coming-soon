import styles from "./styles.module.css";
import { cabinetBold, cabinetExtraBold, cabinetLight, cabinetMedium } from "@/app/utils/fonts";
import MainLogo from "@/app/assets/icons/MainLogo";
import { ReactElement } from "react";
import Link from 'next/link';

export default function ComingSoonCard(): ReactElement {
  return (
    <div
      className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] lg:w-[35vw] xl:w-[42vw] h-[32vh] lg:h-[65vh] flex flex-col  justify-center items-center  border-secondary border-4 backdrop-blur-sm px-9 py-9  gap-2`}
    >
      <MainLogo height={350} width={400} className="" />
      <div
        className={` ${cabinetExtraBold.className} text-center lg:text-5xl text-3xl text-primary-gradient-color  bg-gradient-to-b from-purpures to-saffron bg-clip-text text-transparent `}
      >
        Coming Soon !
      
      </div>
      <p
          className={`text-white text-base md:text-2xl text-center font-light ${cabinetLight.className} `}
        >
          Pre-Register Now to Get Notified When Registration Starts.
        </p>

      <div className="flex flex-col justify-center items-center gap-6 w-full mt-3">
          <Link
            className="w-full h-[2.9rem] bg-secondary p-[3px] flex justify-center items-center rounded mx-2 py-5 text-black"
            href="https://youtube.com"//forms link
          >
            <button className={`font-black text-lg ${cabinetBold.className}`}>
              Pre Register Here
            </button>
          </Link>
        </div>
    </div>
  );
}

