import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const Split = ({
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
      d="M14.22 2.335a7.588 7.588 0 0 1 6.362 6.362c.09.599-.392 1.136-.998 1.136h-5.501a1 1 0 0 1-1-1V3.332c0-.606.538-1.087 1.137-.997v0ZM19.184 17.589a7.528 7.528 0 0 0 1.398-3.369c.09-.599-.392-1.136-.998-1.136h-4.087c-.89 0-1.337 1.077-.707 1.707l2.891 2.891c.426.425 1.144.391 1.503-.093v0ZM8.71 6.666a7.593 7.593 0 0 0-6.312 9.022c.577 2.967 2.975 5.354 5.944 5.919 2.251.428 4.37-.139 5.992-1.338.486-.359.523-1.079.096-1.506l-4.304-4.304a1 1 0 0 1-.293-.707v-6.09c0-.601-.529-1.084-1.124-.996v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default Split
