import { cardDetails } from "@/Constants";
import CarCards from "@/components/shared/CarCards";
import { Button } from "@/components/ui/button";
import { car, colCar } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen mx-[70px]">
      <section className="h-[700px] w-full flex gap-2 flex-col xl:flex-row">
        <div className="relative w-3/4 2xl:w-[1000px] h-full">
          <Image fill src={car} alt="car" className="object-cover" />
        </div>
        <div className="relative w-[149px] h-full hidden 2xl:flex">
          <Image src={colCar} fill alt="car" className="object-cover" />
        </div>
        <div className="w-full md:max-w-[300px] h-[362px] bg-[#3E4B61] py-[60px] px-[15px] text-white rounded-lg">
          <p>Name of Vehicle:</p>
          <p>Price of the Vehicle:</p>
          <div className="flex flex-col gap-4 mt-2">
            <Button className="bg-transparent border border-[#9DC23E]">
              WhatsApp
            </Button>
            <Button className="bg-[#9DC23E]">Show Contract</Button>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="flex flex-col gap-y-4 justify-center items-center text-white">
          <h2 className="text-center text-4xl font-semibold">Our Products</h2>
        </div>

        <div className="flex flex-wrap gap-10 mt-[60px]">
          {cardDetails.map((card, index) => (
            <Link href="/details" key={index}>
              <CarCards key={index} items={card} isSecond={true} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
