import Navbar from "@/components/shared/Navbar";
import { hero, line } from "@/public";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen hide-scrollbar">
      <Navbar />
      <section className="relative w-full h-screen">
        <Image fill src={hero} alt="image" className="object-cover" />
        <div className="absolute -bottom-[80px] left-1/2 transform -translate-x-1/2 w-[1000px] bg-[#3E4B61] h-[200px] p-[36px]">
          <p className="text-center text-white">
            Not Sure About Which Vehicle to Pick ? Find it here
          </p>
          <div className="w-full flex justify-center mt-4">
            <Image src={line} alt="line" width={394} height={1} />
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </div>
  );
}
