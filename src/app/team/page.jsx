"use client";
import { useEffect, useState } from "react";
import { TeamHero } from "./components/TeamHero/TeamHero";
import { TeamMembers } from "./components/TeamMembers/TeamMembers";

import { Header } from "@/app/shared/components/Header/Header";
import "./team.css";
import Link from "next/link";

function Team() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // this is hacky but quicker to implement than waiting for image load events to all fire
    setTimeout(() => {
      setIsLoaded(true);
    }, 400);
  }, []);
  return (
    <>
      <Header />
      <main className="main team-main">
        <TeamHero isLoaded={isLoaded} />
        <TeamMembers isLoaded={isLoaded} />

        <div className="spacer">
          <div className="team-hiring-cta">
            {/* <h2>We&apos;re Hiring!</h2>
            <div>
              Check <Link href="/open-roles">Open Roles</Link>{" "}
            </div> */}
          </div>
        </div>
      </main>
    </>
  );
}

export default Team;
