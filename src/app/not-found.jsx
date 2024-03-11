import { Header } from "@/app/shared/components/Header/Header";

import "./not-found.css";
import { ButtonLink } from "./shared/components/ButtonLink/ButtonLink";

export default function NotFound() {
  return (
    <div className="not-found">
      <img
        width={1606}
        height={1767}
        src="/404_bg_mobile.png"
        alt=""
        className="not-found__background-img-mobile"
      />
      <img
        width={3214}
        height={1767}
        src="/404_bg_desktop.png"
        alt=""
        className="not-found__background-img-desktop"
      />
      <Header />
      <div className="not-found__text-container">
        <span>oops</span>
        <h1>404</h1>
        <h2>page not found</h2>
        <div className="not-found__button-box">
          <ButtonLink href="/">go to homepage</ButtonLink>
        </div>
      </div>
    </div>
  );
}
