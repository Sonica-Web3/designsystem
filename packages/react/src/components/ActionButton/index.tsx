import React, { ComponentProps } from 'react'
import Icon, { IconNameProps } from '@sonicaweb3/icons'

import { ActionButtonContainer } from './styles'
import { config } from '../../styles'
import type * as Stitches from '@stitches/react'

export interface ActionButtonProps
  extends ComponentProps<typeof ActionButtonContainer> {
  iconName: IconNameProps
  borderColor: Stitches.PropertyValue<'color', typeof config>
}

export function ActionButton({
  iconName,
  borderColor,
  ...rest
}: ActionButtonProps) {
  return (
    <ActionButtonContainer css={{ borderColor }} {...rest}>
      <Icon name={iconName} size="sm" />
    </ActionButtonContainer>
  )
}
