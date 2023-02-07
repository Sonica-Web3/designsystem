import React, { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import Icon from '@sonica/icons'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxContainer {...rest}>
      <CheckboxIndicator asChild forceMount>
        <Icon name="check" size="xs" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
