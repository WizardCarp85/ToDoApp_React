import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Pixel Planner 🚀",
  description: "Your daily quest begins here!",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="relative">
          <div className="h-[86px] md:h-24 bg-[#141414] rounded-b-lg"></div>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
