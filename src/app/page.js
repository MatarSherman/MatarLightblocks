"use client";

import { useEffect, useState } from "react";

import { Header } from "@/app/shared/components/Header/Header";
import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";
import { Video } from "@/app/shared/components/Video/Video";

import "./home.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [bgIsLoaded, setBgIsLoaded] = useState(true);

  // useEffect(() => {
  //   setScreenWidth(window.innerWidth);
  //   setTimeout(() => {
  //     // fallback to show text if load event doesn't fire for some reason
  //     setBgIsLoaded(true);
  //   }, 4000);
  // }, []);

  return (
    <>
      <Header bgIsLoaded={bgIsLoaded} isHomePage />
      <main className="home_page">
        <div
          className={`content ${bgIsLoaded ? "" : "content--bg-is-loading"}`}
        >
          <h1 className="home-hero__heading homepage-transition">
            lightblocks labs
          </h1>
          <p className="homepage-transition">
            At <strong>lightblocks labs</strong> our mission is to revolutionize
            blockchain interoperability through shared security.
          </p>
          <p className="homepage-transition">
            We are committed to leading the development of{" "}
            <strong>eoracle</strong> infrastructure as a <em>modular</em> and{" "}
            <em>programmable</em> layer, seamlessly connecting blockchains with
            real-world data and off-chain computation.
          </p>
          <div className="home-hero__cta homepage-transition">
            <ButtonLink href="https://eoracle.gitbook.io/eoracle/" isExternal>
              Learn more about eoracle
            </ButtonLink>
            <ButtonLink href="/team" variant="secondary">
              Meet the team
            </ButtonLink>
          </div>
        </div>
        <div className="spline-container">
          <Spline
            onLoad={() => setBgIsLoaded(true)}
            scene="https://prod.spline.design/HqSf7rPpP36sTtlR/scene.splinecode"
          />
        </div>

        {/* <div className="bg-video-container">
          <Video
            isSmoothLoad={true}
            setBgIsLoaded={setBgIsLoaded}
            src="/video/hero_bg_big.mp4"
          />
        </div> */}
        {/* <div className="home-hero__background-video-container">
          <div
            className={`bg-overlay `}
          />
          <Video
            setBgIsLoaded={setBgIsLoaded}
            src="/video/hero_bg.mp4"
            className="home-hero__background-video"
          />
        </div> */}
      </main>
    </>
  );
}
