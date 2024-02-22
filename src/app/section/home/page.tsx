"use client"
import MainLogo from "@/app/assets/icons/MainLogo";
import HeroIcon from "@/app/assets/icons/Hero";
import { cabinetBold } from "@/app/utils/fonts";
import { useState, useEffect } from 'react';

export default function Hero() {
    const [logoSize, setLogoSize] = useState({ width: 345, height: 152 });
    const [textSize, setTextSize] = useState('text-3xl');
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 580) {
          setLogoSize({ width: 150, height: 50 });
        }
  
        else if (window.innerWidth < 768) {
          setLogoSize({ width: 200, height: 87 });
          setTextSize('text-lg'); 
        }
  
        else {
          setLogoSize({ width: 345, height: 150 });
          setTextSize('text-3xl'); 
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div className=" flex flex-column justify-center object-contain bg-dark-purple ">
        <div className=" w-screen h-screen overflow-hidden object-fill border border-black">
            <HeroIcon className=""/>
        </div>
      
      <div className="absolute gap-[25px] top-[80px] flex flex-col text-center ">
        <MainLogo className="w-fit h-fit"/>
        <p
          className={`text-3xl font-extrabold text-secondary ${cabinetBold.className}`}
        >
          Coming Soon
        </p>
      </div>
    </div>
  );
};

