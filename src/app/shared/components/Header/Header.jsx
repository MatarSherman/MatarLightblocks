'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./header.css";

export function Header({ bgIsLoaded, isHomePage = false, isNavbar = false }) {
  const location = usePathname();
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setScrolled(currentScrollPos > 100);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  return (
    <header
      className={`header ${isHomePage && !bgIsLoaded ? "header--bg-is-loading" : ""
        }`}
    // className={`header ${scrolled ? "header--top" : ""}`}
    >
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
        {
          !isNavbar ? null :
            <nav className="header__nav">
              <a
                className="header__nav-link"
                href={"https://eoracle.io/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                eoracle
              </a>
              <Link
                href={"/team"}
                className={`header__nav-link ${location.pathname === "/team" ? "active" : ""
                  }`}
              >
                Team
              </Link>
              <span className="header__roles-text">Open Roles</span>
            </nav>
        }
      </div>
    </header>
  );
}
