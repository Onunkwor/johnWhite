import Navbar from "@/components/shared/Navbar";
import {
  bmw,
  eq,
  ford,
  hero,
  hero2,
  hero3,
  hero4,
  line,
  tesla,
} from "@/public";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cardDetails } from "@/Constants";
import CarCards from "@/components/shared/CarCards";

export default function Home() {
  return (
    <div className="min-h-screen hide-scrollbar">
      <Navbar />
      <section className="relative w-full h-screen mb-[100px]">
        <Image fill src={hero} alt="image" className="object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] bg-[#3E4B61] h-[200px] p-[36px] rounded-xl mb-[-100px]">
          <p className="text-center text-white">
            Not Sure About Which Vehicle to Pick? Find it here
          </p>
          <div className="w-full flex justify-center mt-4">
            <Image src={line} alt="line" width={394} height={1} />
          </div>
          <div className="flex gap-x-[60px] w-full justify-center mt-[60px]">
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
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            <Button size="xl" className="bg-[#9DC23E]">
              Search
            </Button>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="flex flex-col gap-y-4 justify-center items-center text-white">
          <h2 className="text-center text-4xl font-semibold">Featured Cars</h2>
          <Image src={line} alt="line" width={394} height={1} />
        </div>

        <div className="flex flex-wrap gap-5 mt-8">
          {cardDetails.map((card, index) => (
            <CarCards key={index} items={card} />
          ))}
        </div>
      </section>

      <section className="h-[751px] bg-[#3E4B61] px-[76px] w-full">
        <div className="flex w-full h-full items-center justify-center">
          <div className="w-3/5 h-[551px] relative">
            <Image src={hero2} fill alt="car" />
          </div>
          <div className="text-white flex flex-col items-center justify-center gap-y-5 w-[40%] h-[551px] px-8">
            <div className="text-left">
              <p className="text-left">World’s Best Online Car Dealer</p>
              <p className="text-5xl leading-[60px] font-semibold my-[30px]">
                Get the Best Car, Especially Handpicked for You
              </p>
              <p className="text-base leading-[35px]">
                Index Living Mall WINNER FURNITURE โซฟาเบาะผ้า L-Shape รุ่น
                โรแกน สีเทา 202x156x76 Cm. Index Living Mall WINNER FURNITURE
                โซฟาเบาะผ้า L-Shape รุ่น โรแกน สีเทา 202x156x76 Cm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[687px]">
        <div className="h-full w-full relative">
          <Image src={hero3} fill alt="car" />
          <div className="w-full h-full bg-black absolute opacity-[0.6]"></div>
          <div className="absolute w-full h-full  text-white left-1/2 transform -translate-x-1/2 text-center flex items-center justify-center flex-col">
            <div className="flex flex-col gap-y-[24px]">
              <h3 className="text-5xl font-medium leading-[36px] tracking-[0.25px]">
                Our partners
              </h3>
              <p className="font-medium leading-[25px] text-lg">
                We provide coverage from the region's best insurance providers.
                representing a multitude of insurance companies, including:
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
              <Image src={tesla} width={200} height={200} alt="logo" />
              <Image src={ford} width={200} height={200} alt="logo" />
              <Image src={eq} width={200} height={200} alt="logo" />
              <Image src={bmw} width={200} height={200} alt="logo" />
            </div>
            <Button className="bg-[#3E5276]">View product</Button>
          </div>
        </div>
      </section>

      <section className="h-[1299px] bg-[#222E43] py-[100px] px-[46px]">
        <div className="text-white text-center">
          <h3 className="text-4xl leading-[26px]">Fresh Launches</h3>
          <p className="w-[1000px] mx-auto text-xl leading-[26px] mt-[61px]">
            GuardianShield insurance plans offer flexibility, allowing you to
            conveniently apply for motor insurance online and customize it
            according to your specific requirements. GuardianShield insurance
            plans offer flexibility, allowing you to conveniently apply for
            motor insurance online and customize it according to your specific
            requirements.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 mt-[61px]">
          {cardDetails.map((card, index) => (
            <CarCards key={index} items={card} isSecond={true} />
          ))}
        </div>
        <span className="flex justify-center items-center mt-[61px]">
          <Button className="bg-[#9DC23E]">View more</Button>
        </span>
      </section>

      <section className="w-full h-[687px]">
        <div className="h-full w-full relative">
          <Image src={hero4} fill alt="car" className="object-cover" />
          <div className="w-full h-full bg-black absolute opacity-[0.6]"></div>
          <div className="absolute w-full h-full  text-white left-1/2 transform -translate-x-1/2 text-center flex items-center justify-center flex-col gap-y-10">
            <div className="flex flex-col gap-y-[24px]">
              <h3 className="text-5xl font-medium leading-[36px] tracking-[0.25px]">
                Our partners
              </h3>
              <p className="font-medium leading-[25px] text-lg w-[1100px]">
                GuardianShield insurance plans offer flexibility, allowing you
                to conveniently apply for motor insurance online and customize
                it according to your specific requirements. GuardianShield
                insurance plans offer flexibility, allowing you to conveniently
                apply for motor insurance online and customize it according to
                your specific requirements.GuardianShield insurance plans offer
                flexibility, allowing you to conveniently apply for motor
                insurance online and customize it according to your specific
                requirements. GuardianShield insurance plans offer flexibility,
                allowing you to conveniently apply for motor insurance online
                and customize it according to your specific requirements.
              </p>
            </div>
            <span className="flex justify-center items-center">
              <Button className="bg-[#9DC23E]">Contact Us</Button>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
