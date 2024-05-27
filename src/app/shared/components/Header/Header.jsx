"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

export function Header({ isHomePage = false, hasNavBar = true }) {
  const path = usePathname();

  return (
    <header className={`header ${isHomePage ? "header--bg-is-loading" : ""}`}>
      <div className="header-inner">
        <Link href={"/"}>
          <img
            width={30}
            height={35}
            className="header__logo homepage-transition"
            src="/logo.svg"
            alt="Lightblocks logo"
          />
          <img
            width={194}
            height={42}
            className="header__logo--desktop homepage-transition"
            src="/logo_desktop.svg"
            alt="Lightblocks logo"
          />
        </Link>
        {!hasNavBar ? null : (
          <nav className="header__nav">
            <a
              className="header__nav-link"
              href="https://www.eoracle.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              eoracle
            </a>
            <Link
              href={"/team"}
              className={`header__nav-link ${
                path?.startsWith("/team")
                  ? "header__nav-link--current-page"
                  : ""
              }`}
            >
              Team
            </Link>
            <Link
              href={"/open-roles"}
              className={`header__nav-link ${
                path?.startsWith("/open-roles")
                  ? "header__nav-link--current-page"
                  : ""
              }`}
            >
              Careers
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
