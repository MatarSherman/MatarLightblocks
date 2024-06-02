"use client"

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { TeamMemberCard } from "./TeamMemberCard/TeamMemberCard";
import { teamData } from "./teamData";
import InfiniteScroll from "react-infinite-scroll-component";

const size = 1;

export function TeamMembersListMobile() {
  const [selectedMember, setSelectedMember] = useState(null);

  const rows = chunkArray(teamData, 2);

  const [pagination, setPagination] = useState(1)
  const [team, setTeam] = useState([...rows.slice(0, pagination * size)])

  const loadMoreTeam = async () => {
    setTeam([...rows.slice(0, (pagination + 1) * size)]);
    setPagination(curr => curr + 1);
  };

  return (
    <div
      className="team-members-section--mobile"
      onClick={() => setSelectedMember(null)}
    >
      <InfiniteScroll
        dataLength={team.length}
        hasMore={rows.length > team.length}
        next={loadMoreTeam}
        style={{ width: "100%", overflow: "hidden" }}>
        {team.map((row, i) => (
          <TeamMembersRow
            selectedMember={selectedMember}
            setSelectedMember={setSelectedMember}
            key={`team-member__row-${i}`}
            members={row}
            index={i}
            isMobile
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export function TeamMembersListDesktop() {
  const rows = chunkArray(teamData, 3);

  const [pagination, setPagination] = useState(1)
  const [team, setTeam] = useState([...rows.slice(0, pagination * size)])

  const loadMoreTeam = async () => {
    // await new Promise(resolve => setTimeout(resolve, 300))
    setTeam([...rows.slice(0, (pagination + 1) * size)]);
    setPagination(curr => curr + 1);
  };

  return (
    <div className="team-members-section--desktop">
      <InfiniteScroll
        dataLength={team.length}
        hasMore={rows.length > team.length}
        next={loadMoreTeam}
        style={{ width: "100%", overflow: "hidden", paddingBlockEnd: '150px' }}
        initialScrollY={0}
        scrollThreshold={1}
      >
        {team.map((row, i) => {
          return (
            <TeamMembersRow
              key={`team-member__row-${i}`}
              members={row}
              index={i}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

function TeamMembersRow({ members, index, selectedMember, setSelectedMember }) {
  return (
    <div className={`team-members__row`}>
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
      className={`team-members-section translate-container ${!isLoaded ? "team-members-section--hidden" : ""
        }`}
    >
      <h2 className="team-members__heading">Meet the Team</h2>
      <TeamMembersListMobile />
      <TeamMembersListDesktop />
    </div>
  );
}
