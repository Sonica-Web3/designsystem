import React, { ComponentProps } from 'react'
import { LoadingContainer, LoadingSpin } from './styles'

export interface LoadingProps extends ComponentProps<typeof LoadingContainer> {}

export function Loading({ children, ...rest }: LoadingProps) {
  return (
    <LoadingContainer {...rest}>
      <LoadingSpin>
        <i className="_1"></i>
        <i className="_2"></i>
        <i className="_3"></i>
      </LoadingSpin>
    </LoadingContainer>
  )
}
