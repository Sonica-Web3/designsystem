import React, { ComponentProps } from 'react'
import { Loading } from '../Loading'
import { ButtonContainer } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  loading: boolean
  children: React.ReactNode
  variant: 'solid' | 'outline' | 'error'
}

export function Button({
  children,
  loading = false,
  variant = 'solid',
  disabled = false,
  ...rest
}: ButtonProps) {
  const loadingVariant = {
    solid: 'neutral' as 'neutral',
    outline: 'primary' as 'primary',
    error: 'error' as 'error',
  }

  const currentVariant = loadingVariant[variant] ?? 'neutral'

  return (
    <ButtonContainer
      variant={variant}
      loading={loading}
      disabled={disabled}
      {...rest}
    >
      {loading ? <Loading variant={currentVariant} /> : children}
    </ButtonContainer>
  )
}
