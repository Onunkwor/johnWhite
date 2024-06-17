import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-[150px]">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
