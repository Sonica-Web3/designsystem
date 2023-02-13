import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const DarkMode = ({
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
      d="M12.004 12.004c1.938-1.938 2.313-4.867 1.17-7.312-.179-.377.193-.78.596-.675a8.25 8.25 0 0 1 3.767 2.149c3.223 3.222 3.292 8.383.152 11.523-3.14 3.14-8.298 3.072-11.523-.153a8.242 8.242 0 0 1-2.149-3.767c-.106-.402.299-.775.675-.596 2.441 1.145 5.372.77 7.312-1.17v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default DarkMode
