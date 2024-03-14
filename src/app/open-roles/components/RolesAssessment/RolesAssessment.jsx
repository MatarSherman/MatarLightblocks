import { Video } from "@/app/shared/components/Video/Video";
import {
  ApplicationIcon,
  EvaluationIcon,
  InterviewsIcon,
  WorkTrialIcon,
} from "./components/Icons";

import "./roles-assessment.css";

export function RolesAssessment() {
  return (
    <section className="roles-assessment">
      <div className="roles-assessment__inner">
        <div className="roles-assessment__heading-container">
          <h2 className="roles-assessment__heading">
            Interviewing & <br />Assessment
          </h2>
          <ApplicationStages isDesktop />
        </div>
        <div className="roles-assessment__video-container">
          <Video
            className="roles-assessment__video"
            src="/video/assessment.mp4"
          />
        </div>
      </div>
      <ApplicationStages />
    </section>
  );
}

function ApplicationStages({ isDesktop }) {
  return (
    <div
      className={`application-stages ${
        isDesktop ? "application-stages--desktop" : "application-stages--mobile"
      }`}
    >
      <div className="application-stages__stage">
        <div className="application-stages__icon-container">
          <ApplicationIcon />
        </div>
        <span className="application-stages__title">Application received</span>
      </div>

      <div className="application-stages__stage">
        <div className="application-stages__icon-container">
          <InterviewsIcon />
        </div>
        <span className="application-stages__title">Rounds of interviews</span>
      </div>

      <div className="application-stages__stage">
        <div className="application-stages__icon-container">
          <EvaluationIcon />
        </div>
        <span className="application-stages__title">Initial evaluation</span>
      </div>

      <div className="application-stages__stage">
        <div className="application-stages__icon-container">
          <WorkTrialIcon />
        </div>
        <span className="application-stages__title">Work trial assignment</span>
      </div>
    </div>
  );
}
