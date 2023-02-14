import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const EmailWallet = ({
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
      d="M12 0a29.654 29.654 0 0 0 3.61 3.53A27.325 27.325 0 0 0 14.272 12c0 2.948.47 5.793 1.34 8.47A29.644 29.644 0 0 0 12 24a29.647 29.647 0 0 0-3.611-3.53A27.326 27.326 0 0 0 9.729 12c0-2.948-.47-5.792-1.34-8.47A29.656 29.656 0 0 0 11.999 0ZM5.891 18.619A30.687 30.687 0 0 0 1.5 16.195c.427-1.327.657-2.736.657-4.195 0-1.46-.23-2.868-.657-4.195a30.699 30.699 0 0 0 4.391-2.424C6.42 7.506 6.7 9.722 6.7 12c0 2.278-.28 4.494-.809 6.619ZM17.3 12c0 2.278.28 4.494.81 6.619a30.688 30.688 0 0 1 4.39-2.424A13.666 13.666 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.39-2.424A27.36 27.36 0 0 0 17.3 12Z"
      fill="#6851FF"
    />
  </svg>
)
export default EmailWallet
