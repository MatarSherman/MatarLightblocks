'use client';

import { Video } from "@/app/shared/components/Video/Video";

import "./roles-life.css";
import { useState } from "react";

export function RolesLife() {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <section className="roles-life">
      <div className="roles-life__inner">
        <div className="roles-life__video-container">
          <Video className="roles-life__video" src="/video/life_at.mp4" />
        </div>
        <div className="roles-life__text">
          <h2 className="roles-life__heading">Life at Lightblocks</h2>
          <p className="roles-life__paragraph desktop">
            At lightblocks, <strong>innovation isn’t just a buzzword; <br className="narrow"/>it’s the pulse that <br className="wide"/>
              drives us.</strong> We’re in the business <br className="narrow"/>of redefining the norm, where having <br className="wide"/>
            strong <br className="narrow"/>opinions isn’t just welcome - it’s essential for <br className="narrow"/>sparking the kind <br className="wide"/>
            of change we aim for. Expect <br className="narrow"/>to be stretched, to go beyond your own <br className="wide"/>
            limits, <br className="narrow"/>surrounded by peers who are masters of their <br className="narrow"/>craft and who will <br className="wide"/>
            challenge you to rise <br className="narrow"/>to their level.
          </p>
          <p className="roles-life__paragraph mobile">
            At lightblocks,&nbsp;
            {
              isReadMore ? <>
                <strong>innovation isn’t just a <br />
                  buzzword; it’s the pulse that drives us. </strong><br />
                We’re in the business of redefining the <br />
                norm, where having strong opinions isn’t <br />
                just welcome - it’s essential for sparking <br />
                the kind of change we aim for. Expect to <br />
                be stretched, to go beyond your own <br />
                limits, surrounded by peers who are <br />
                masters of their craft and who will <br />
                challenge you to rise to their level.
              </>
                : <>innovation isn’t just a <br />buzzword; it’s the... </>
            }
            <strong className={'roles-life__paragraph__read-more'} data-state={isReadMore ? 'open' : 'closed'} onClick={() => setIsReadMore(curr => !curr)}>
              {isReadMore ? 'show less' : 'read more'}
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}

