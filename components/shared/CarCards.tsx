import { electricity, gear, miles } from "@/public";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  items: {
    image: any;
    name: string;
    date: string;
    model: string;
    type: string;
    miles: string;
  };
};

const CarCards = ({ items }: Props) => {
  return (
    <div className="w-[373px] h-[310px] flex flex-col bg-white rounded-lg">
      <div>
        <Image
          src={items.image}
          width={373}
          height={260}
          alt="car"
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex mx-[18.5px] justify-between items-center pt-[5px]">
        <p className="font-semibold text-xl">{items.name}</p>
        <span className="w-[49px] h-[20px] bg-[#49D526]"></span>
      </div>
      <div className="flex justify-between mx-[16px] items-center mt-1">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4 text-[#7b7b7b]" />
          <p className="text-xs text-[#7b7b7b]">{items.date}</p>
        </span>
        <span className="flex items-center gap-1">
          <Image
            src={gear}
            height={12}
            width={12}
            alt="gear"
            className="text-[#7b7b7b]"
          />
          <p className="text-[#7b7b7b] text-xs">{items.model}</p>
        </span>
        <span className="flex items-center gap-1">
          <Image
            src={electricity}
            height={12}
            width={12}
            alt="gear"
            className="text-[#7b7b7b]"
          />
          <p className="text-[#7b7b7b] text-xs">{items.type}</p>
        </span>
        <span className="flex items-center gap-1">
          <Image
            src={miles}
            height={12}
            width={12}
            alt="gear"
            className="text-[#7b7b7b]"
          />
          <p className="text-[#7b7b7b] text-xs">{items.miles}</p>
        </span>
      </div>
    </div>
  );
};

export default CarCards;
