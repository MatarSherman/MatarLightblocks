import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./shared/components/SmoothScrolling";
import Script from "next/script";
import { Header } from "./shared/components/Header/Header";

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

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-NS9PKPRLEH`}
        ></Script>

        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NS9PKPRLEH');
          `}
        </Script>
        {/* <!---------------------------> */}
      </head>

      {/* <!-- Open Graph tags --> */}
      <meta property="og:title" content="lightblocks labs" />
      <meta
        property="og:description"
        content="At lightblocks labs our mission is to revolutionize blockchain interoperability through shared security."
      />
      <meta
        property="og:image"
        content="https://www.lightblocks.org/lightblocks-promo.png"
      />
      <meta
        property="twitter:image"
        content="https://www.lightblocks.org/lightblocks-promo.png"
      />
      {/* <!---------------------------> */}

      <body>
        <Header />
        <SmoothScrolling>{children}</SmoothScrolling>
        {/* <Script src="https://boards.greenhouse.io/embed/job_board/js?for=lightblocks"></Script> */}
      </body>
    </html>
  );
}
