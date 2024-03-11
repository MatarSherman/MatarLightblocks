import Image from "next/image";

import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";

import "./open-roles-hero.css";

export function OpenRolesHero() {
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
              Build innovative <br /> solutions for dApps{" "}
              <br className="open-roles-hero__heading-br" />
              <span className="open-roles-hero__with-us">(with us)</span>
            </h1>
            <p className="open-roles-hero__paragraph">
              As true believers in the potential of blockchain technology,
              <br className="open-roles-hero__p-br" /> we craft solutions to
              accelerate the industry forward.
            </p>
            <p className="open-roles-hero__paragraph open-roles-hero__paragraph--bold">
              We welcome those who share our mission and values.
            </p>
          </div>
          <div className="open-roles-hero__cta">
            <ButtonLink
              href="#rolesListings"
              className="open-roles-hero__button"
            >
              Open Roles
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
