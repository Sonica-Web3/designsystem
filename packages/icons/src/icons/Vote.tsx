import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const Vote = ({
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
      d="M10.03 5H4.5M13.441 3.586a2 2 0 1 1-2.829 2.828 2 2 0 0 1 2.83-2.828M19.5 5h-5.47M4.5 20.75h15M12.03 7 12 20.75"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M8.814 13.227c.114.18.18.391.16.603a3.501 3.501 0 0 1-6.97.001.974.974 0 0 1 .16-.607L5.488 8s2.62 4.115 3.326 5.227v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.94 13.5h-6.9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M21.84 13.227c.115.18.18.391.16.603a3.501 3.501 0 0 1-6.97.001.974.974 0 0 1 .16-.607L18.516 8l3.326 5.227Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.97 13.5h-6.91"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default Vote
