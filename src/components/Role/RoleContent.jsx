"use client";

import "@/components/Role/role.css";
import { useEffect, useState } from "react";

const RoleContent = ({ content }) => {
  const [decodedHtml, setDecodedHtml] = useState("");

  // Function to decode HTML entities
  function decodeHtmlEntities(htmlString) {
    const element = document.getElementsByClassName("role-data")[0];
    element.innerHTML = htmlString;
    return element.textContent || element.innerText;
  }

  useEffect(() => {
    // Decode HTML entities in the string
    setDecodedHtml(decodeHtmlEntities(content));
  }, [content]);

  return (
    <div
      className="role-data"
      dangerouslySetInnerHTML={{ __html: decodedHtml }}
    />
  );
};

export default RoleContent;
