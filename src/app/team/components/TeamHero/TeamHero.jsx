import { TeamCarousel } from "./TeamCarousel/TeamCarousel";
import "./team-hero.css";

export function TeamHero({ isLoaded }) {
  return (
    <div className="team-hero">
      <div className="team-hero-inner">
        <div
          className={`team-hero__text-container ${
            !isLoaded ? "team-hero__text-container--hidden" : ""
          }`}
        >
          <h1 className="team-hero__heading">We&apos;re lightblocks</h1>
          <p className="team-hero__paragraph">
            Driven by innovation and committed to excellence, our team brings
            together expertise from various fields to exceed the boundaries of
            blockchain interoperability.
          </p>
          {/* <div className="team-hero__cta">
            <ButtonLink variant="secondary" href="/open-roles">
              Open roles
            </ButtonLink>
          </div> */}
        </div>
        <TeamCarousel isLoaded={isLoaded} />
      </div>
    </div>
  );
}
