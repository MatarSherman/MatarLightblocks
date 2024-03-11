import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./shared/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "lightblocks labs",
  description:
    "Leading the development of eoracle infrastructure as a modular and programmable layer, seamlessly connecting blockchains with real-world data and off-chain computation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <link
          rel="preload"
          as="image"
          href="/images/team-hero-background.jpg"
        />
        <link
          rel="preload"
          as="fetch"
          href="https://prod.spline.design/0rqxcsk4GcwtvCqk/scene.splinecode"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_1-517.png"
          imageSrcSet="/images/carousel/bottom_1-191.png 191w, /images/carousel/bottom_1-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_2-517.png"
          imageSrcSet="/images/carousel/bottom_2-191.png 191w, /images/carousel/bottom_2-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_3-517.png"
          imageSrcSet="/images/carousel/bottom_3-191.png 191w, /images/carousel/bottom_3-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_4-517.png"
          imageSrcSet="/images/carousel/bottom_4-191.png 191w, /images/carousel/bottom_4-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_5-517.png"
          imageSrcSet="/images/carousel/bottom_5-191.png 191w, /images/carousel/bottom_5-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/bottom_6-517.png"
          imageSrcSet="/images/carousel/bottom_6-191.png 191w, /images/carousel/bottom_6-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_1-517.png"
          imageSrcSet="/images/carousel/top_1-191.png 191w, /images/carousel/top_1-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_2-517.png"
          imageSrcSet="/images/carousel/top_2-191.png 191w, /images/carousel/top_2-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_3-517.png"
          imageSrcSet="/images/carousel/top_3-191.png 191w, /images/carousel/top_3-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_4-517.png"
          imageSrcSet="/images/carousel/top_4-191.png 191w, /images/carousel/top_4-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_5-517.png"
          imageSrcSet="/images/carousel/top_5-191.png 191w, /images/carousel/top_5-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
        <link
          rel="preload"
          as="image"
          href="/images/carousel/top_6-517.png"
          imageSrcSet="/images/carousel/top_6-191.png 191w, /images/carousel/top_6-517.png 517w"
          imageSizes="(max-width: 768px) 191px,
          517px"
        />
      </head>
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
