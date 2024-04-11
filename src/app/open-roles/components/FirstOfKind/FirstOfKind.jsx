'use client';

import { useState } from "react";
import { Video } from "@/app/shared/components/Video/Video";

import "./first-of-kind.css";

export function FirstOfKind() {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <section className="first-of-kind">
      <div className="first-of-kind__video-container">
        <Video className="first-of-kind__video" src="/video/firstofkind.mp4" />
      </div>
      <div className="first-of-kind__heading-container">
        <h2 className="first-of-kind__heading">
          Take Part in Shaping the <br className="first-of-kind__heading-tablet-br" />Future of <br className="first-of-kind__heading-desktop-br" />
          Decentralized <br className="first-of-kind__heading-tablet-br" />Networks
        </h2>
        <p className="first-of-kind__paragraph-desktop">
          We are not just building technology; we are shaping <br className="first-of-kind__paragraph-desktop__narrow-br" />the future of <br className="first-of-kind__paragraph-desktop_wide-br" />
          decentralized networks. If you are <br className="first-of-kind__paragraph-desktop__narrow-br" />passionate about innovation and <br className="first-of-kind__paragraph-desktop_wide-br" />
          driven by values <br className="first-of-kind__paragraph-desktop__narrow-br" />that align with pioneering a new digital frontier, you <br className="first-of-kind__paragraph-desktop__narrow-br" /><br className="first-of-kind__paragraph-desktop_wide-br" />
          have a place in the team.
        </p>
        <p className="first-of-kind__paragraph-mobile">
          {
            isReadMore ? <>
              We are not just building technology; we <br />
              are shaping the future of decentralized <br />
              networks. If you are passionate about <br />
              innovation and driven by values that align <br />
              with pioneering a new digital frontier, you <br />
              have a place in the team. {" "}
            </> : <>
              We are not just building technology; we <br />
              are shaping the future of...{" "}
            </>
          }
          <strong className={'open-roles-hero__read-more'} onClick={() => setIsReadMore(curr => !curr)}>
            {isReadMore ? 'show less' : 'read more'}
          </strong>
        </p>
      </div>
    </section>
  );
}


