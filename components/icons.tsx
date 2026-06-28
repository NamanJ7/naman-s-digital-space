import type { SVGProps } from "react";

/** Substack wordmark (lucide has no brand icon for it). */
export function SubstackIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M22 4H2v2.62h20V4ZM2 9.31V20l10-5.59L22 20V9.31H2Z" />
    </svg>
  );
}
