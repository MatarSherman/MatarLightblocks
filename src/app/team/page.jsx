'use client';

import { useLayoutEffect } from "react";
import { TeamHero } from "./components/TeamHero/TeamHero";
import { TeamMembers } from "./components/TeamMembers/TeamMembers";
import "./team.css";

function Team() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <main className="main team-main">
      <TeamHero isLoaded={true} />
      <TeamMembers isLoaded={true} />

      <div className="spacer">
        <div className="team-hiring-cta">
          {/* <h2>We&apos;re Hiring!</h2>
            <div>
              Check <Link href="/open-roles">Open Roles</Link>{" "}
            </div> */}
        </div>
      </div>
    </main>
  );
}

export default Team;
