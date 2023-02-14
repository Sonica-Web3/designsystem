import { ComponentProps } from 'react'
import Icon, { IconNameProps } from '@sonicaweb3/icons'

import { SmallerButtonContainer } from './styles'

export interface SmallerButtonProps
  extends ComponentProps<typeof SmallerButtonContainer> {
  iconName: IconNameProps
}

export function SmallerButton({ iconName, ...rest }: SmallerButtonProps) {
  return (
    <SmallerButtonContainer {...rest}>
      <Icon name={iconName} size="xs" />
    </SmallerButtonContainer>
  )
}
