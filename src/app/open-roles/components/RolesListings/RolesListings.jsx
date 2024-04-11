"use client";

import { Suspense, forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import "./roles-listings.css";
import roles from "../../roleData.json";
import Link from "next/link";
import Script from "next/script";

export function RolesListings({ departments }) {
  return (
    <section id="rolesListings" className="roles-listings">
      {/* <h2 className="roles-listings__heading">Open Roles</h2> */}
      {/* <div id="grnhse_app"></div> */}

      {/* <iframe
        style={{ display: "none" }}
        width={0}
        height={0}
        src={
          <Script src="https://boards.greenhouse.io/embed/job_board/js?for=lightblocks"></Script>
        }
      /> */}
      {/* <Accordion.Root collapsible className="category-list">
        {departments
          .filter((dep) => dep.jobs.length > 0)
          .map((dep) => {
            return (
              <Accordion.Item
                className="AccordionItem"
                value={`item-${dep.id}`}
                key={`item-${dep.id}`}
              >
                <AccordionTrigger>
                  <span className="role-category__trigger-button-text">
                    {dep.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent asChild>
                  <ul className="role-category__content">
                    {dep.jobs.map((job) => {
                      return (
                        <li key={`eng_listing_${job.id}`}>
                          <Link href={`/open-roles/role/${job.id}`}>
                            {job.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </Accordion.Item>
            );
          })}
      </Accordion.Root> */}
    </section>
  );
}

const AccordionTrigger = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header>
      <Accordion.Trigger
        className="role-category__trigger-button"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="role-category__trigger-button-icon"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content {...props} ref={forwardedRef}>
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

function ChevronDownIcon(props) {
  return (
    <div {...props}>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.417526 0.997506C0.808666 0.609121 1.44026 0.610237 1.83002 1L5.70502 4.875L9.58963 0.998845C9.97933 0.609997 10.6104 0.610341 10.9996 0.999614V0.999614C11.3892 1.38919 11.3892 2.02081 10.9996 2.41038L5.70502 7.705L0.415022 2.415C0.0233038 2.02328 0.0244259 1.38784 0.417526 0.997506V0.997506Z"
          fill="#2A2A31"
        />
      </svg>
    </div>
  );
}
