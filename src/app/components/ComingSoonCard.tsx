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
        w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[45vw] xl:w-[40vw] 2xl:w-[35vw]
        min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]
        flex flex-col justify-center items-center 
        border-secondary border-2 backdrop-blur-sm
        p-4 sm:p-6 lg:p-8
        [@media(max-width:280px)]:w-[95vw] 
        [@media(max-height:700px)]:min-h-[80vh]
        [@media(min-width:820px)_and_(max-width:1024px)]:w-[70vw]`}
    >
      <MainLogo
        className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[320px] xl:w-[360px]
        h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]
        [@media(max-width:280px)]:w-[160px] mt-4 sm:mt-6"
      />
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 justify-center items-center w-full py-4 sm:py-6">
        <span
          className={`${cabinetExtraBold.className} 
          text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          text-primary-gradient-color
          [@media(max-width:280px)]:text-xl`}
        >
          Coming Soon !
        </span>
        <span
          className={`${cabinetRegular.className} 
          text-center text-white
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          px-2 sm:px-4 md:px-8 lg:px-12`}
        >
          Pre-Register Now to Get Notified When Registration Starts.
        </span>
        <Link href={"https://forms.gle/uE3r4M7vFLHbZbFs8"} className="w-full flex h-fit justify-center mt-2">
          <button
            className={`${cabinetExtraBold.className}
          text-black rounded-sm bg-[#F5C144]
          w-[95%] sm:w-[85%] md:w-[80%] lg:w-[75%]
          py-2 sm:py-2.5 lg:py-3
          text-sm sm:text-base md:text-lg lg:text-xl
          hover:bg-[#e3b13d] transition-colors
          [@media(max-width:280px)]:w-[95%] mb-4 sm:mb-6`}
          >
            Pre Register Here
          </button>
        </Link>
      </div>
    </div>
  );
}
