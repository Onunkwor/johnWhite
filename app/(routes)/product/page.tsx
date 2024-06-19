import { cardDetails } from "@/Constants";
import CarCards from "@/components/shared/CarCards";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { line } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen hide-scrollbar">
      <section className="w-full h-screen mb-[100px] px-[84px]">
        <h1 className="text-4xl lg:text-[64px] text-white leading-tight tracking-wide mb-8 max-w-[1000px] lg:h-[200px] h-fit">
          The Easiest Way to Find the Most Suitable CNG Vehicles for Yourself.
        </h1>
        <div className="flex justify-center mt-20">
          <div className="max-w-[1000px] bg-[#3E4B61] h-[320px] lg:h-[200px] p-[36px] rounded-xl">
            <p className="text-center text-white">
              Not Sure About Which Vehicle to Pick? Find it here
            </p>
            <div className="w-full justify-center mt-4 hidden lg:flex">
              <Image src={line} alt="line" width={394} height={1} />
            </div>
            <div className="flex gap-x-[60px] w-full justify-center lg:mt-[60px] flex-col lg:flex-row gap-y-2 items-center mt-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Search car type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Search car brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Search car brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Car 1</SelectItem>
                  <SelectItem value="dark">Car 2</SelectItem>
                  <SelectItem value="system">Car 3</SelectItem>
                </SelectContent>
              </Select>
              <Button size="xl" className="bg-[#9DC23E]">
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <span className="flex gap-1">
            <Button className="bg-[#1E2F4D]">1</Button>
            <Button className="bg-[#1E2F4D]">2</Button>
            <Button className="bg-[#1E2F4D]">3</Button>
            <Button className="bg-[#1E2F4D]">4</Button>
          </span>
          <div className="bg-white w-full h-[1px] opacity-[0.6]"></div>
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

export default Product;
