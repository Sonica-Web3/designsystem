import React, { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import Icon from '@sonicaweb3/icons'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxContainer {...rest}>
      <CheckboxIndicator asChild forceMount>
        <Icon name="check" size="xs" color="neutralColorWhite" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
