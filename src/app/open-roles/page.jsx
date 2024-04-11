import { OpenRolesHero } from "./components/OpenRolesHero/OpenRolesHero";
import { FirstOfKind } from "./components/FirstOfKind/FirstOfKind";
import { RolesLife } from "./components/RolesLife/RolesLife";
import { RolesAssessment } from "./components/RolesAssessment/RolesAssessment";
import { RolesListings } from "./components/RolesListings/RolesListings";
import "./open-roles.css";
import dynamic from "next/dynamic";
const GreenhouseJobs = dynamic(() => import('./components/GreenhouseRoles'))
// import { getDepartments } from "@/libs/api";

export default function Page() {
  // const departments = await getDepartments();
  
  return (
    <div className="open-roles-page">
      {/* <Header /> */}
      <OpenRolesHero />
      <FirstOfKind />
      <RolesAssessment />
      <RolesLife />
      {/* <RolesListings departments={departments} /> */}
      {/* <RolesListings /> */}
      <GreenhouseJobs />
    </div>
  );
}
