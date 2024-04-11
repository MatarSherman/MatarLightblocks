import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";
import VideoBackgroundLoader from "@/components/Loaders/VideoBackgroundLoader";
import "@/app/home.css";
import HomeVideoLoader from "@/components/Loaders/HomeVideoLoader";

export default function Home() {
  return (
    <main className="home_page">
      <div className="content fade-in">
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
      </div>
      <HomeVideoLoader />
      <VideoBackgroundLoader />
    </main>
  );
}
