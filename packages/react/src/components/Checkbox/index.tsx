import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox({ ...rest }: CheckboxProps) {
  return (
    <CheckboxContainer {...rest}>
      <CheckboxIndicator asChild forceMount>
        <i className="material-symbols-rounded">check_small</i>
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
