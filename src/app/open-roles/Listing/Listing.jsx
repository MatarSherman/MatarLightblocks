import { useState, useEffect } from "react";
import { rolesData } from "../../../content/roles";
import { useParams } from "react-router-dom";

export function Listing() {
  console.log({ rolesData });
  const { roleSlug } = useParams();
  const [markdown, setMarkdown] = useState(null);

  useEffect(() => {
    // fetch();
    console.log({ roleSlug });
  }, []);

  // TODO role not found based on route param

  return (
    <section>
      <h2>Open Roles</h2>
      <p>Product & Research</p>
      <ul>
        <li>Technical Product Manager</li>
        <li>Product Manager & Architect - System</li>
        <li>Econometrician</li>
        <li>Product Analyst</li>
      </ul>
      <p>Engineering</p>
      <ul>
        <li>Solidity Developer</li>
      </ul>
    </section>
  );
}
