"use client";
// import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";
// import VideoBackgroundLoader from "@/components/Loaders/VideoBackgroundLoader";
import "@/app/home.css";
// import HomeVideoLoader from "@/components/Loaders/HomeVideoLoader";
import { useEffect, useState } from "react";

export default function Home() {
  const [Spline, setSpline] = useState();

  if (!Spline) {
    try {

      import("@splinetool/react-spline").then((spline) => {
        setSpline(spline.default);
        console.log('splinedefault: ',spline.default)
      });
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!Spline) {
      try {

        import("@splinetool/react-spline").then((spline) => {
          setSpline(spline.default);
          console.log('splinedefault: ',spline.default)
        });
      } catch (err) {
        console.log(err)
      }
    }
  }, []);

  useEffect(() => {
    if (!Spline) {
      try {

        import("@splinetool/react-spline").then((spline) => {
          setSpline(spline.default);
          console.log('splinedefault: ',spline.default)
        });
      } catch (err) {
        console.log(err)
      }
    }
  }, [Spline]);

  return (
    <main className="home_page">
      {/* <div className="content fade-in">
        <h1 className="home-hero__heading">
          lightblocks labs
        </h1>
        <p>
          At <strong>lightblocks labs</strong> our mission is to revolutionize
          blockchain interoperability through shared security.
        </p>
        <p>
          We are committed to leading the development of{" "}
          <strong>eoracle</strong> infrastructure as a <em>modular</em> and{" "}
          <em>programmable</em> layer, seamlessly connecting blockchains with
          real-world data and off-chain computation.
        </p>
        <div className="home-hero__cta">
          <ButtonLink href="https://eoracle.gitbook.io/eoracle/" isExternal>
            Learn more about eoracle
          </ButtonLink>
          <ButtonLink href="/team" variant="secondary">
            Meet the team
          </ButtonLink>
        </div>
      </div> */}
      {/* <HomeVideoLoader />
      <VideoBackgroundLoader /> */}
      {Spline ? (
        <Spline
          scene="https://prod.spline.design/0rqxcsk4GcwtvCqk/scene.splinecode"
          // onLoad={onLoad}
        />
      ) : (
        "HELLO"
      )}
    </main>
  );
}
