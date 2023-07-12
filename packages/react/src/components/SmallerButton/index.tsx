import { ComponentProps } from 'react'
import { IconNameProps } from '@sonicaweb3/icons'

import { SmallerButtonContainer } from './styles'

export interface SmallerButtonProps
  extends ComponentProps<typeof SmallerButtonContainer> {
  iconName: IconNameProps
}

export function SmallerButton({ iconName, ...rest }: SmallerButtonProps) {
  return (
    <SmallerButtonContainer {...rest}>
      <i className="material-symbols-rounded">{iconName}</i>
    </SmallerButtonContainer>
  )
}
