import { logo } from "@/public";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="h-[150px] bg-[#222E43] flex items-center justify-between w-full px-[40px] fixed top-0 left-0 z-40">
      <div>
        <Image src={logo} width={200} height={64} alt="logo" />
      </div>
      <div className="flex gap-10 text-white">
        <p>Home</p>
        <p>Produce</p>
        <p>About Us</p>
      </div>
      <Button size="lg" className="bg-[#9DC23E]">
        Contact Us
      </Button>
    </div>
  );
};

export default Navbar;
