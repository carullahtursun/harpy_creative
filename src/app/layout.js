import BootstrapClient from "@/components/BootstrapClient/BootstrapClient";
import { ThemeProvider } from "@/context/ThemeContext";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "glightbox/dist/css/glightbox.min.css";
import "../../public/assets/css/vendor/animate.css";
import "../../public/assets/scss/style.scss";

import { Hanken_Grotesk, Ysabeau_Office } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  adjustFontFallback: false,
});
const ysabeauOffice = Ysabeau_Office({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Vmix - Agency HTML Template",
  description: "Agency HTML Template",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <link rel="icon" href="favicon.ico" sizes="any" />
        <body className={`${hankenGrotesk.variable} ${ysabeauOffice.variable}`}>
          {children}
          <BootstrapClient />
        </body>
      </html>
    </ThemeProvider>
  );
}
