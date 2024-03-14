import { Video } from "@/app/shared/components/Video";

import "./first-of-kind.css";

export function FirstOfKind() {
  return (
    <section className="first-of-kind">
      <div className="first-of-kind__video-container">
        <Video className="first-of-kind__video" src="/video/firstofkind.mp4" />
      </div>
      <div className="first-of-kind__heading-container">
        <h2 className="first-of-kind__heading">
          We&apos;re building<br/> the first native<br/> Ethereum oracle
        </h2>
      </div>
    </section>
  );
}
