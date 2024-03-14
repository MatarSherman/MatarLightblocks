import Image from "next/image";

import { ButtonLinkOnPage } from "@/app/shared/components/ButtonLink/ButtonLink";

import "./open-roles-hero.css";
import { useLenis } from "@studio-freight/react-lenis";

export function OpenRolesHero() {
  const lenis = useLenis();
  function scrollToRolesListings(event) {
    lenis.scrollTo("#rolesListings");
  }
  return (
    <section className="open-roles-hero">
      <div className="open-roles-hero__bg-image-gradient-bottom" />
      <div className="open-roles-hero__bg-image-gradient-left" />
      <div className="open-roles-hero__bg-image-gradient-right" />
      <div className="open-roles-hero__inner">
        <Image
          src="/images/open_roles_desktop_bg.jpg"
          width={2763}
          height={1367}
          priority
          alt=""
          className="open-roles-hero__bg-image"
        />
        <div className="open-roles-hero__text-content">
          <div className="open-roles-hero__text-container">
            <h1 className="open-roles-hero__heading">
              Build innovative <br className="open-roles-hero__heading-br-desktop"/>
              solutions for <br className="open-roles-hero__heading-br-mobile"/>dApps{" "}
              <span className="open-roles-hero__with-us">(with us)</span>
            </h1>
            <p className="open-roles-hero__paragraph">
              We’re on the mission to build a global, <br className="open-roles-hero__p-br-mobile"/>
              permissionless, and{" "}
              <br className="open-roles-hero__p-br" />
              crypto-economically <br className="open-roles-hero__p-br-mobile"/>secure data and computation marketplace.
            </p>
            <p className="open-roles-hero__paragraph open-roles-hero__paragraph--bold">
              As our team expands, we welcome those who <br className="open-roles-hero__p-br-mobile"/>share our{" "}
              <br className="open-roles-hero__p-br" />
              mission and values.
            </p>
          </div>
          <div className="open-roles-hero__cta">
            <ButtonLinkOnPage
              href="#rolesListings"
              className="open-roles-hero__button"
              handleClick={scrollToRolesListings}
            >
              Open roles
              <svg
                className="button-link__chevron-down-animated"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.41 0.580078L6 5.17008L10.59 0.580078L12 2.00008L6 8.00008L0 2.00008L1.41 0.580078Z"
                  fill="white"
                />
              </svg>
            </ButtonLinkOnPage>
          </div>
        </div>
      </div>
    </section>
  );
}
