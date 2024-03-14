import { Video } from "@/app/shared/components/Video";

import "./roles-life.css";

export function RolesLife() {
  return (
    <section className="roles-life">
      <div className="roles-life__inner">
        <div className="roles-life__text">
          <h2 className="roles-life__heading">Life at Lightblocks</h2>
          <p className="roles-life__paragraph">
            At lightblocks, we are values driven. We embrace <br />
            a culture where everyone is included, and provide <br />an environment 
            to help develop each team member&apos;s <br />unique contribution towards our missions. 
          </p>
        </div>
        <div className="roles-life__video-container">
          <Video className="roles-life__video" src="/video/life_at.mp4" />
        </div>
      </div>
    </section>
  );
}
