import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LightMode = ({
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
      d="M15.89 8.11a5.5 5.5 0 1 1-7.779 7.78 5.5 5.5 0 0 1 7.778-7.78M12 3V2M12 22v-1M18.36 5.64l.71-.71M4.93 19.07l.71-.71M21 12h1M2 12h1M18.36 18.36l.71.71M4.93 4.93l.71.71"
      stroke="#fff"
      strokeWidth={1.625}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default LightMode;
