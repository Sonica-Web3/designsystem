import React, { ComponentProps } from 'react'
import { LoaderContainer, LoaderSpin } from './styles'

export interface LoaderProps extends ComponentProps<typeof LoaderContainer> {
  children: React.ReactNode
}

export function Loader({ children, ...rest }: LoaderProps) {
  return (
    <LoaderContainer {...rest}>
      <LoaderSpin>
        <i className="_1"></i>
        <i className="_2"></i>
        <i className="_3"></i>
      </LoaderSpin>
      <h4>{children}</h4>
    </LoaderContainer>
  )
}
