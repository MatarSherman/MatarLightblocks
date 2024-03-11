import { useState } from "react";

import { TeamMemberCard } from "./TeamMemberCard/TeamMemberCard";

import { teamData } from "./teamData";

export function TeamMembersListMobile() {
  const [selectedMember, setSelectedMember] = useState(null);
  const rows = chunkArray(teamData, 2);
  return (
    <div
      className="team-members-section--mobile"
      onClick={() => setSelectedMember(null)}
    >
      {rows.map((row, i) => (
        <TeamMembersRow
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
          key={`team-member__row-${i}`}
          members={row}
          index={i}
          isMobile
        />
      ))}
    </div>
  );
}

export function TeamMembersListDesktop() {
  const rows = chunkArray(teamData, 3);

  return (
    <div className="team-members-section--desktop">
      {rows.map((row, i) => {
        return (
          <TeamMembersRow
            key={`team-member__row-${i}`}
            members={row}
            index={i}
          />
        );
      })}
    </div>
  );
}

function TeamMembersRow({ members, index, selectedMember, setSelectedMember }) {
  return (
    <div className={`team-members__row translate-row-${index}`}>
      <div className="team-members-row__inner">
        {members.map((member) => (
          <TeamMemberCard
            key={`team-member__${member.name}`}
            member={member}
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
          />
        ))}
      </div>
    </div>
  );
}

function chunkArray(array, chunkSize) {
  let chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

export function TeamMembers({ isLoaded }) {
  return (
    <div
      className={`team-members-section translate-container ${
        !isLoaded ? "team-members-section--hidden" : ""
      }`}
    >
      <h2 className="team-members__heading">Meet the Team</h2>
      <TeamMembersListMobile />
      <TeamMembersListDesktop />
    </div>
  );
}
