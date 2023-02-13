import React, { ComponentProps } from 'react'
import { LoaderContainer, LoaderSpin } from './styles'

export interface LoaderProps extends ComponentProps<typeof LoaderContainer> {
  children: React.ReactNode
}

export function Loader({ children, ...rest }: LoaderProps) {
  return (
    <LoaderContainer {...rest}>
      <LoaderSpin>
        <div className="spinner-circle">
          <div className="spinner-circle-gradient"></div>

          <div className="spinner-circle-inner"></div>
        </div>
      </LoaderSpin>
      <h4>{children}</h4>
    </LoaderContainer>
  )
}
