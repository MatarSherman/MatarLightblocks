import { useEffect } from "react";
import { Logo } from "@/app/shared/components/Logo";

import "./team-member-card.css";

export function TeamMemberCard({ member, selectedMember, setSelectedMember }) {
  const sanitizedName = member.name.toLowerCase().replace(" ", "-");
  const memberIsSelected = selectedMember == sanitizedName;

  // useEffect(() => {
  //   function handleDocumentClick(event) {
  //     if (setSelectedMember) {
  //       setSelectedMember(null);
  //     }
  //   }
  //   document.addEventListener("click", handleDocumentClick);
  //   return () => {
  //     document.removeEventListener("click", handleDocumentClick);
  //   };
  // }, [setSelectedMember]);

  const assetDir = "/images/team/";
  const imgSmall = `${assetDir}${member.imageFilename}-191.png`;
  const imgMedium = `${assetDir}${member.imageFilename}-269.png`;
  const imgLarge = `${assetDir}${member.imageFilename}-392.png`;

  const srcSet = `${imgSmall} 191w, ${imgMedium} 269w, ${imgLarge} 392w`;
  const sizes = "(max-width: 420px) 191px, (max-width: 600px) 269px, 392px";

  return (
    <figure
      className="team-members-card"
      onClick={(event) => {
        event.stopPropagation();
        if (setSelectedMember) {
          setSelectedMember(sanitizedName);
        }
      }}
    >
      <div
        className={`team-members-card__bio-overlay-mobile ${
          memberIsSelected
            ? "team-members-card__bio-overlay-mobile--visible"
            : ""
        }`}
      >
        <p className="team-members-card__bio-overlay-mobile-text">
          {member.description}
        </p>
      </div>
      <div className="team-members-card__image-container">
        <img
          width={392}
          height={540}
          src={imgLarge}
          srcSet={srcSet}
          sizes={sizes}
          alt={member.name}
          className="team-members-card__image"
          loading="lazy"
        />
        <div className="team-members-card__bio-overlay">
          <p>{member.description}</p>
        </div>
        <div className="team-members-card__image-background" />
        <div className="team-members-card__icon">
          <Logo />
        </div>
      </div>
      <figcaption className="team-members-card__caption">
        <p className="team-members-card__caption-name">{member.name}</p>
        <p
          className="team-members-card__caption-position"
          dangerouslySetInnerHTML={{ __html: member.position }}
        />
      </figcaption>
    </figure>
  );
}
