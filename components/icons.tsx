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

export function MediumIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M2.01 6.55a.66.66 0 0 0-.22-.56L.22 4.1v-.28h6.12l4.73 10.38 4.16-10.38h5.83v.28l-1.34 1.28a.4.4 0 0 0-.15.38v12.48a.4.4 0 0 0 .15.38l1.31 1.28v.28h-6.6v-.28l1.36-1.31c.13-.13.13-.17.13-.38V8.12l-3.77 12.03h-.5L7.26 8.12v8.48c-.04.28.06.57.25.78l1.77 2.15v.28H4.25v-.28l1.77-2.15c.19-.21.28-.5.23-.78V6.55Z" />
    </svg>
  );
}

export function XIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...props}>
      <path d="M18.24 2H21l-6.03 6.9L22.06 22H16.5l-4.35-5.69L7.17 22H4.4l6.46-7.38L4.06 2h5.7l3.93 5.2L18.24 2Zm-.97 17.7h1.53L8.93 4.18H7.29L17.27 19.7Z" />
    </svg>
  );
}
