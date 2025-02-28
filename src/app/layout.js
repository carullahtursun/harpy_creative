import BootstrapClient from "@/components/BootstrapClient/BootstrapClient";
import {ThemeProvider} from "@/context/ThemeContext";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "glightbox/dist/css/glightbox.min.css";
import "../../public/assets/css/vendor/animate.css";
import "../../public/assets/scss/style.scss";

import {Hanken_Grotesk, Ysabeau_Office} from "next/font/google";

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
    title: "Harpy Creative Agency",
    description: "Harpy Creative is a digital agency that specializes in web design, web development, and digital marketing.",
};

export default function RootLayout({children}) {
    return (
        <ThemeProvider>
            <html lang="tr">
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={metadata.description}/>
                <meta name="author" content="Harpy Creative"/>
                <title>{metadata.title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"/>
                <link rel="apple-touch-icon" sizes="180x180" href="./harpy.ico"/>
                <link rel="shortcut icon" href="./harpy.ico"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@harpycreative"/>
                <meta name="twitter:creator" content="@harpycreative"/>
                <meta property="og:url" content="https://harpycreative.com"/>
                <meta property="og:title" content={metadata.title}/>
                <meta property="og:description" content={metadata.description}/>
                <meta property="og:image" content="og-image.jpg"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:type" content="website"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:site_name" content="Harpy Creative"/>
                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="google" content="notranslate"/>
                <meta name="format-detection" content="telephone=no"/>
            </head>
            <body className={`${hankenGrotesk.variable} ${ysabeauOffice.variable}`}>
            {children}
            <BootstrapClient/>
            </body>
            </html>
        </ThemeProvider>
    );
}
