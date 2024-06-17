import { ham, logo } from "@/public";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[150px] bg-[#222E43] flex items-center justify-between w-full px-[40px] fixed top-0 left-0 z-40">
      <div>
        <Image src={logo} width={83.1} height={73} alt="logo" />
      </div>

      <div className="gap-10 text-white hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
        <Link href="/about">About Us</Link>
      </div>
      <Button size="lg" className="bg-[#9DC23E] hidden lg:flex">
        Contact Us
      </Button>

      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Image src={ham} width={24} height={24} alt="icon" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex gap-10 text-black flex-col mt-4">
                <Link href="/">Home</Link>
                <Link href="/product">Product</Link>
                <Link href="/about">About Us</Link>
              </div>
              <Button size="lg" className="bg-[#9DC23E]">
                Contact Us
              </Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
