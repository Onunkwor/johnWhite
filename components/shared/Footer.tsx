import { footer, logo } from "@/public";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="relative w-full h-[1000px] lg:h-[500px]">
        <Image src={footer} fill alt="image" className="object-cover" />
        <div className="bg-black absolute opacity-[0.4] w-full h-full top-0 left-0"></div>

        <div className="absolute flex flex-col lg:flex-row lg:justify-between mt-[100px] w-full px-[20px] lg:px-[50px] gap-6 lg:gap-0">
          <div className="flex items-start lg:w-[411px] gap-x-[21px] flex-col lg:flex-row">
            <Image src={logo} width={83.1} height={73} alt="logo" />
            <p className="text-lg leading-[24px] tracking-[-1px] text-white w-full lg:w-[307px]">
              BMT, your go-to source for electric and CNG vehicles in Nigeria.
              We are dedicated to providing sustainable, high-tech
              transportation solutions that reduce environmental impact and
              offer cost-effective alternatives to traditional fuel cars. Join
              us in driving towards a greener future.
            </p>
          </div>

          <div className="w-full lg:w-[316px] text-white">
            <p className="text-2xl leading-[44px] tracking-[0.25px] mb-[19px]">
              Contact info
            </p>
            <p className="text-lg leading-[44px] tracking-[0.25px]">
              Vehicle Inquiries: (406) 555-0120
            </p>
            <p className="text-lg leading-[44px] tracking-[0.25px]">
              Email: info@gmail.com
            </p>
          </div>
          <div className="w-full lg:w-[316px] text-white">
            <p className="text-2xl leading-[44px] tracking-[0.25px] mb-[19px]">
              Service Time
            </p>
            <p className="text-lg leading-[44px] tracking-[0.25px]">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-lg leading-[44px] tracking-[0.25px]">
              Saturday: 10:00 AM - 4:00 PM
            </p>
            <p className="text-lg leading-[44px] tracking-[0.25px]">
              Sunday: Closed
            </p>
          </div>
          <div className="w-full lg:w-[106px] text-white flex flex-col gap-2">
            <p>Product</p>
            <p>Landing Page</p>
            <p>Popup Builder</p>
            <p>Web-design</p>
            <p>Content</p>
            <p>Integrations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
