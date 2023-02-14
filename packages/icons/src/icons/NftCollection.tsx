import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const NftCollection = ({
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
      d="M9 10.5H3A1.5 1.5 0 0 1 1.5 9V3A1.5 1.5 0 0 1 3 1.5h6A1.5 1.5 0 0 1 10.5 3v6A1.5 1.5 0 0 1 9 10.5Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m1.5 8.743 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L10.5 7.14M4.257 3.703a.187.187 0 1 1-.265.266.187.187 0 0 1 .265-.266"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M9 22.5H3A1.5 1.5 0 0 1 1.5 21v-6A1.5 1.5 0 0 1 3 13.5h6a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 9 22.5Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m1.5 20.743 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L10.5 19.14M4.257 15.703a.188.188 0 1 1-.265.266.188.188 0 0 1 .265-.266"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M21 10.5h-6A1.5 1.5 0 0 1 13.5 9V3A1.5 1.5 0 0 1 15 1.5h6A1.5 1.5 0 0 1 22.5 3v6a1.5 1.5 0 0 1-1.5 1.5Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.5 8.743 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L22.5 7.14M16.257 3.703a.188.188 0 1 1-.265.266.188.188 0 0 1 .265-.266"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M21 22.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5Z"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.5 20.743 2.306-2.306a.5.5 0 0 1 .707 0l.703.703 2.288-2.288a.5.5 0 0 1 .707 0L22.5 19.14M16.257 15.703a.188.188 0 1 1-.265.266.188.188 0 0 1 .265-.266"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default NftCollection
