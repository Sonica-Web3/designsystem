import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Nft = ({
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
      d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3Z"
    />
    <path d="m3 17.486 4.612-4.612a.999.999 0 0 1 1.414 0l1.406 1.406 4.577-4.576a.999.999 0 0 1 1.414 0L21 14.281M8.515 7.407a.375.375 0 1 1-.53.53.375.375 0 0 1 .53-.53" />
  </svg>
);
export default Nft;
