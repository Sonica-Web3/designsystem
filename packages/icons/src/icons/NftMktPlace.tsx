import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const NftMktPlace = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      clipRule="evenodd"
      d="M9 11H3a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 3 2h6a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 9 11Z"
    />
    <path d="m1.5 9.243 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L10.5 7.64M4.257 4.203a.187.187 0 1 1-.265.266.187.187 0 0 1 .265-.266M1.5 14h9M1.5 16h6M1.5 18h4M1.5 22h9" />
    <path
      clipRule="evenodd"
      d="M22 11h-6a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 16 2h6a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 22 11Z"
    />
    <path d="m14.5 9.243 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L23.5 7.64M17.257 4.203a.188.188 0 1 1-.265.266.188.188 0 0 1 .265-.266M14.5 14h9M14.5 16h6M14.5 18h4M14.5 22h9" />
  </svg>
);
export default NftMktPlace;
