import React from "react";
import Image from "next/image";
import Sports from "../public/assets/img/icon/Sports.svg";
import ChartIcon from "../public/assets/img/icon/chart-simple.svg";
import ShirtIcon from "../public/assets/img/icon/shirt.svg";
import MenuIcon from "../public/assets/img/icon/menu.svg";
import badge1 from "../public/assets/img/icon/badge1.png";
import badge2 from "../public/assets/img/icon/badge2.png";
import ArrowDown from "../public/assets/img/icon/arrow-down.svg";

export const Card = () => {
  return (
    <div className="w-full block p-6 bg-card rounded-[1rem] shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 bg-no-repeat bg-cover">
      <div className=" flex items-center justify-between ">
        <div className="flex">
          <Image
            priority
            src={Sports}
            height={14}
            width={14}
            alt="Follow us on Twitter"
          />

          <div
            className="flex ml-2
        "
          >
            <h5 className="font-bold text-sm">Tottenham</h5>
            <span className="mx-2">-</span>
            <h5 className="font-bold text-sm">Leicester City</h5>
          </div>
        </div>

        <div>
          <Image
            priority
            src={ChartIcon}
            height={16}
            width={16}
            alt="Follow us on Twitter"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 py-2">
        <div className="flex gap-2">
          <h6 className="time">Today, 21:30</h6>

          <Image
            priority
            src={MenuIcon}
            height={14}
            width={14}
            alt="Follow us on Twitter"
          />
          <Image
            priority
            src={ShirtIcon}
            height={14}
            width={14}
            alt="Follow us on Twitter"
          />
        </div>
        <div className="flex gap-2">
          <Image
            priority
            src={badge1}
            height={14}
            width={14}
            alt="Follow us on Twitter"
          />
          <h6 className="text-xs">Barracas Central</h6>
        </div>
        <div className="flex gap-2">
          <Image
            priority
            src={badge2}
            height={14}
            width={14}
            alt="Follow us on Twitter"
          />
          <h6 className="text-xs">CA Central Cordoba SE</h6>
        </div>
        <h6 className="text-xs">1X2</h6>
      </div>

      <div className="grid grid-cols-10 gap-x-2">
        <div className="flex justify-between pill rounded-full px-4 py-2 col-span-3">
          <p className="text-xs font-bold">1</p>
          <p className="text-xs font-bold">1.05</p>
        </div>
        <div className="flex justify-between pill rounded-full px-4 py-2 col-span-3">
          <p className="text-xs font-bold">draw</p>
          <p className="text-xs font-bold">1.05</p>
        </div>
        <div className="flex justify-between pill rounded-full px-4 py-2 col-span-3">
          <p className="text-xs font-bold">1</p>
          <p className="text-xs font-bold">1.05</p>
        </div>
        <div className="flex justify-center pill rounded-full px-2 py-2 col-span-1">
          <Image
            priority
            src={ArrowDown}
            height={24}
            width={24}
            alt="Follow us on Twitter"
          />
        </div>
      </div>
    </div>
  );
};
