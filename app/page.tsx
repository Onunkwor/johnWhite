import Navbar from "@/components/shared/Navbar";
import { hero, line } from "@/public";
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
    </div>
  );
}
