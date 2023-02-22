import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BandeiraBrasil = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="url(#bandeira-brasil_svg__a)" d="M1 3.5h14v9H1z" />
    <defs>
      <pattern
        id="bandeira-brasil_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#bandeira-brasil_svg__b"
          transform="matrix(.02 0 0 .03111 0 -.044)"
        />
      </pattern>
      <image
        id="bandeira-brasil_svg__b"
        width={50}
        height={35}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default BandeiraBrasil;
