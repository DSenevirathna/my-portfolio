import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "../components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransaction from "@/components/ui/StairTransaction";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight:["100", "200" , "300","400" , "500" , "600","700","800"]
});



export const metadata = {
  title: "Devdini Senevirathna",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
          className={`${jetBrainsMono.variable}`}
      >
          <Header />
          <StairTransaction/>
          <PageTransition>
            {children}
          </PageTransition>

      </body>
    </html>
  );
}
