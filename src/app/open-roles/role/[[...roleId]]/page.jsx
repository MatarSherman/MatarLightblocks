import { Header } from "@/app/shared/components/Header/Header";
import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";

import roles from "../../roleData.json";
import "./role.css";

export default async function Page({ params }) {
  const role = roles.find((role) => role.id === params.roleId[0]);
  return (
    <div className="role-page">
      <div className="banner">
        <Header isNavbar={true} />
        <div className="banner__content">
          <h1 className="role-name">{role.title}</h1>
          <p>
            Join us on the mission to build a global,
            <br className="mobile" /> permissionless, and{" "}
            <br className="desktop" />
            crypto-economically
            <br className="mobile" /> secure data and computation marketplace
          </p>
          <ButtonLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSdxNtVK9MK7HlBC4zYpqFEo4TcDpJ0IliBU_U3MdvtOM-9gpQ/viewform"
            isExternal={true}
            isFullWidth={false}
          >
            Apply now
          </ButtonLink>
        </div>
      </div>
      <div className="main">
        <div
          className="role-data"
          dangerouslySetInnerHTML={{ __html: role.html }}
        />
        <div className="role-page__cta">
          <ButtonLink
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSdxNtVK9MK7HlBC4zYpqFEo4TcDpJ0IliBU_U3MdvtOM-9gpQ/viewform"
            }
            isExternal={true}
            isFullWidth={false}
          >
            Apply now
          </ButtonLink>
        </div>
        {/* temporarly removed */}
        {/* <div className="footer">
          ©️ 2024 Lightblocks. All rights reserved.
          <div className="icons">
            <img src={'/images/role/X.svg'} />
            <img src={'/images/role/linkedin.svg'} />
            <img src={'/images/role/telegram.svg'} />
            <img src={'/images/role/discord.svg'} />
            <img src={'/images/role/github.svg'} />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return roles.map((role) => ({
    roleId: [role.id],
  }));
}
