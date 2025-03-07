import styles from "./styles.module.css";
import {
  cabinetExtraBold,
  cabinetLight,
  cabinetRegular,
} from "@/app/utils/fonts";
import MainLogo from "@/app/assets/icons/MainLogo";
import { ReactElement } from "react";
import Link from "next/link";

export default function ComingSoonCard(): ReactElement {
  return (
    <div
      className={`${styles.muted_color} rounded-[0.65rem] 
        w-[90vw] sm:w-[80vw] lg:w-[36vw] xl:w-[36vw] 3xl:w-[36vw] 
        h-auto 
        flex flex-col justify-center items-center 
        border-secondary border-2 backdrop-blur-sm
        px-4 sm:px-5 py-4 sm:py-5
        [@media(max-width:280px)]:w-[95vw] 
        [@media(min-width:1024px)_and_(max-height:600px)]:min-h-[65vh] 
        [@media(min-width:820px)_and_(max-width:1024px)]:w-[70vw]`}
    >
      <MainLogo
        className="w-[200px] sm:w-[270px] lg:w-[400px] 
        h-[160px] sm:h-[190px] lg:h-[200px]
        [@media(max-width:280px)]:w-[180px] mt-6"
      />
      <div className="flex flex-col gap-4 sm:gap-5 justify-center items-center lg:py-2 w-full">
        <span
          className={`${cabinetExtraBold.className} 
          text-center text-[2.25rem] sm:text-4xl lg:text-5xl
          text-primary-gradient-color
          [@media(max-width:280px)]:text-xl`}
        >
          Coming Soon !
        </span>
        <span
          className={`${cabinetRegular.className} 
          text-center text-white
          text-base sm:text-lg md:text-xl lg:text-2xl xl:px-14 px-2`}
        >
          Pre-Register Now to Get Notified When Registration Starts.
        </span>
        <Link href={"https://forms.gle/uE3r4M7vFLHbZbFs8"} className="w-full flex h-fit justify-center">
          <button
            className={`${cabinetExtraBold.className}
          text-black rounded-sm bg-[#F5C144]
          w-[90%] sm:w-[80%]
          py-1 sm:py-1.5 lg:py-2
          text-base sm:text-lg lg:text-xl
          hover:bg-[#e3b13d] transition-colors
          [@media(max-width:280px)]:w-[95%] mb-9`}
          >
            Link to Google Forms
          </button>
        </Link>
      </div>
    </div>
  );
}
