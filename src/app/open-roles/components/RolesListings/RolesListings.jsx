import { forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";

import "./roles-listings.css";
import roles from "../../roleData.json";
import Link from "next/link";

export function RolesListings() {
  const tags = roles.reduce((acc, role) => {
    if (!acc.includes(role.tags[0].name)) {
      acc.push(role.tags[0].name);
    }
    return acc;
  }, []);

  return (
    <section id="rolesListings" className="roles-listings">
      <h2 className="roles-listings__heading">Open Roles</h2>
      <Accordion.Root collapsible className="category-list">
        {tags.map((tag, i) => {
          return (
            <Accordion.Item
              className="AccordionItem"
              value={`item-${i + 1}`}
              key={`item-${i + 1}`}
            >
              <AccordionTrigger>
                <span className="role-category__trigger-button-text">
                  {tag}
                </span>
              </AccordionTrigger>
              <AccordionContent asChild>
                <ul className="role-category__content">
                  {roles
                    .filter((role) => {
                      console.log({ role });
                      return role.tags[0].name === tag;
                    })
                    .map((role, i) => {
                      return (
                        <li key={`eng_listing_${i}`}>
                          <Link href={`/open-roles/role/${role.id}`}>
                            {role.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </AccordionContent>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
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
