import React, { ComponentProps } from 'react'
import Icon, { IconNameProps } from '@sonicaweb3/icons'

import { ActionButtonContainer } from './styles'

export interface ActionButtonProps
  extends ComponentProps<typeof ActionButtonContainer> {
  iconName: IconNameProps
}

export function ActionButton({ iconName, ...rest }: ActionButtonProps) {
  return (
    <ActionButtonContainer {...rest}>
      <Icon name={iconName} size="sm" />
    </ActionButtonContainer>
  )
}
