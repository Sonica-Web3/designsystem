import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const Walletconnect = ({
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
      d="M5.506 7.659c3.586-3.512 9.402-3.512 12.989 0l.431.422c.18.176.18.46 0 .636l-1.476 1.446a.233.233 0 0 1-.325 0l-.594-.581c-2.502-2.45-6.56-2.45-9.062 0l-.636.622a.233.233 0 0 1-.324 0L5.032 8.76a.443.443 0 0 1 0-.636l.474-.464Zm16.043 2.99 1.314 1.287c.18.175.18.46 0 .636l-5.926 5.802a.466.466 0 0 1-.65 0l-4.206-4.118a.117.117 0 0 0-.162 0l-4.206 4.118a.466.466 0 0 1-.65 0l-5.926-5.802a.443.443 0 0 1 0-.636l1.315-1.287a.466.466 0 0 1 .65 0l4.205 4.118a.117.117 0 0 0 .163 0l4.205-4.118a.466.466 0 0 1 .65 0l4.206 4.118a.116.116 0 0 0 .162 0l4.206-4.118a.466.466 0 0 1 .65 0Z"
      fill="#3B99FC"
    />
  </svg>
)
export default Walletconnect
