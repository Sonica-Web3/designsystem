import React, { ComponentProps } from 'react'

import type * as Stitches from '@stitches/react'
import { config } from '../../styles'

import { PillContainer, Button, Icon } from './styles'

export interface PillProps extends ComponentProps<typeof PillContainer> {
  children: string
  bgColor: Stitches.PropertyValue<'backgroundColor', typeof config>
  iconColor: Stitches.PropertyValue<'backgroundColor', typeof config>
  textColor: Stitches.PropertyValue<'color', typeof config>
  onClick?: () => void
}

export function Pill({
  children,
  bgColor,
  iconColor,
  textColor,
  small,
  onClick,
  ...rest
}: PillProps) {
  return (
    <PillContainer
      small={small}
      {...rest}
      css={{ background: bgColor, color: textColor }}
    >
      {children}
      {!small && (
        <Button onClick={onClick}>
          <Icon name="x" size="sm" css={{ stroke: iconColor }} />
        </Button>
      )}
    </PillContainer>
  )
}
