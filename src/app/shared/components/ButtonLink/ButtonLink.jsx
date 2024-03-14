import Link from "next/link";
import "./button-link.css";

const buttonVariants = {
  primary: "button-link--primary",
  secondary: "button-link--secondary",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  isFullWidth = false,
  isExternal = false,
}) {
  const classList = `button-link ${buttonVariants[variant]} ${
    isFullWidth ? "button-link--full-width" : ""
  }`;

  if (isExternal) {
    return (
      <a
        className={classList}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classList} href={href}>
      {children}
    </Link>
  );
}

export function ButtonLinkOnPage({
  href,
  children,
  variant = "primary",
  isFullWidth = false,
  handleClick,
}) {
  const classList = `button-link ${buttonVariants[variant]} ${
    isFullWidth ? "button-link--full-width" : ""
  }`;

  return (
    <a href={href} className={classList} onClick={handleClick}>
      {children}
    </a>
  );
}
