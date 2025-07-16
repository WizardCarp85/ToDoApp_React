"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const hide = pathname === "/auth/sign-up" || pathname === "/auth/sign-in";

  return (
    <>
      {!hide && <div className="h-[70px] md:h-24 bg-[#141414] rounded-b-lg"></div>}
      {!hide && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hide && <Footer />}
    </>
  );
}
