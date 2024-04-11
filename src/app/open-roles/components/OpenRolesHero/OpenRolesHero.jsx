'use client';

import { useState } from "react";
import Image from "next/image";

import { ButtonLinkOnPage } from "@/app/shared/components/ButtonLink/ButtonLink";

import "./open-roles-hero.css";
import { useLenis } from "@studio-freight/react-lenis";

export function OpenRolesHero() {
  const [isReadMore, setIsReadMore] = useState(false);

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
              Empowering the <br className="br-desktop"/>
              Blockchain <br className="br-mobile" />Revolution
            </h1>
            <p className="open-roles-hero__paragraph open-roles-hero__paragraph-desktop">
              At the heart of our endeavor is a vision to revolutionize the <br />
              blockchain landscape. We are committed to creating a worldwide, <br />
              permissionless marketplace where data and computation thrive on <br />
              the pillars of crypto-economic security and global transparency.
            </p>
            <p className="open-roles-hero__paragraph open-roles-hero__paragraph-mobile">
              {
                isReadMore ? <>
                At the heart of our endeavor is a vision to <br />
                revolutionize the blockchain landscape. We <br />
                are committed to creating a worldwide, <br />
                permissionless marketplace where data <br />
                and computation thrive on the pillars of <br />
                crypto-economic security and global <br />
                transparency.
                </>
                : <>
                  At the heart of our endeavor is a vision to <br />
                  revolutionize the...
                </>
              }
              {' '}
              <strong className={'open-roles-hero__read-more'} data-state={isReadMore ? 'open' : 'closed'} onClick={() => setIsReadMore(curr => !curr)}>
              {isReadMore ? 'show less' : 'read more'}
            </strong>
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
