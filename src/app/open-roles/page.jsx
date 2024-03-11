"use client";
import { Header } from "@/app/shared/components/Header/Header";
import { OpenRolesHero } from "@/app/open-roles/components/OpenRolesHero/OpenRolesHero";
import { FirstOfKind } from "@/app/open-roles/components/FirstOfKind/FirstOfKind";
import { RolesLife } from "@/app/open-roles/components/RolesLife/RolesLife";
import { RolesAssessment } from "@/app/open-roles/components/RolesAssessment/RolesAssessment";
import { RolesListings } from "@/app/open-roles/components/RolesListings/RolesListings";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <OpenRolesHero />
        <FirstOfKind />
        <RolesAssessment />
        <RolesLife />
        <RolesListings />
      </main>
    </>
  );
}
