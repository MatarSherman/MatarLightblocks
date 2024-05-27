import { OpenRolesHero } from "./components/OpenRolesHero/OpenRolesHero";
import { FirstOfKind } from "./components/FirstOfKind/FirstOfKind";
import { RolesLife } from "./components/RolesLife/RolesLife";
import { RolesAssessment } from "./components/RolesAssessment/RolesAssessment";
import { RolesListings } from "./components/RolesListings/RolesListings";
import "./open-roles.css";

export default function Page() {
  return (
    <div className="open-roles-page">
      {/* <Header /> */}
      <OpenRolesHero />
      <FirstOfKind />
      <RolesAssessment />
      <RolesLife />
      <RolesListings />
    </div>
  );
}
