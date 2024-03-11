"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

import { Header } from "@/app/shared/components/Header/Header";
import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";
import { Video } from "@/app/shared/components/Video";

import "./home.css";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [bgIsLoaded, setBgIsLoaded] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setTimeout(() => {
      // fallback to show text if load event doesn't fire for some reason
      setBgIsLoaded(true);
    }, 4000);
  }, []);

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
        {screenWidth && screenWidth > 768 && (
          <div className="spline-container">
            <div
              className={`bg-overlay ${bgIsLoaded ? "bg-overlay--hidden" : ""}`}
            >
              <svg
                width="32"
                height="32"
                className="stroke-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="spinner_QPB9">
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    fill="none"
                    strokeWidth="2"
                  ></circle>
                </g>
              </svg>
            </div>
            <Spline
              onLoad={() => setBgIsLoaded(true)}
              scene="https://prod.spline.design/0rqxcsk4GcwtvCqk/scene.splinecode"
            />
          </div>
        )}
        <div className="home-hero__background-video-container">
          <div
            className={`bg-overlay ${bgIsLoaded ? "bg-overlay--hidden" : ""}`}
          />
          <Video
            setBgIsLoaded={setBgIsLoaded}
            src="/video/hero_bg.mp4"
            className="home-hero__background-video"
          />
        </div>
      </main>
    </>
  );
}
