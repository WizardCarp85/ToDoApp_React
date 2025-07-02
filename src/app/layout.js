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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col">
          <div className="h-[70px] md:h-24 bg-[#141414] rounded-b-lg"></div>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer/>
      </body>
    </html>
  );
}
