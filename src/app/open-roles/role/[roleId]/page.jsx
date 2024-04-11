import { ButtonLink } from "@/app/shared/components/ButtonLink/ButtonLink";
import { getJobDetails, getJobs } from "@/libs/api";
import "@/components/Role/role.css";
import RoleContent from "@/components/Role/RoleContent";
import Script from "next/script";

// export const dynamicParams = false;

export async function generateStaticParams() {
  const jobs = await getJobs();

  return jobs.map((role) => ({
    roleId: `${role.id}`,
  }));
}

export default async function RoleIdPage({ params }) {
  const { roleId } = params;
  const role = await getJobDetails(roleId);

  return (
    <div className="role-page">
      {/* <div className="banner">
        <div className="banner__content">
          <h1 className="role-name">{role.title}</h1>
          <p>
            As true believers in the potential of <br className="mobile" />
            blockchain, we craft solutions
            <br className="desktop" />
            <br className="mobile" /> to accelerate the industry’s vision.{" "}
            <br className="desktop" />
            <b>
              <br className="mobile" />
              As our team expands, we welcome those
              <br className="mobile" /> who share our mission
              <br className="desktop" /> and values.
            </b>
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
        <RoleContent content={role.content} />
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
      </div> */}
    </div>
  );
}

/* temporarly removed */
{
  /* <div className="footer">
  ©️ 2024 Lightblocks. All rights reserved.
  <div className="icons">
    <img src={"/images/role/X.svg"} />
    <img src={"/images/role/linkedin.svg"} />
    <img src={"/images/role/telegram.svg"} />
    <img src={"/images/role/discord.svg"} />
    <img src={"/images/role/github.svg"} />
  </div>
</div>; */
}
