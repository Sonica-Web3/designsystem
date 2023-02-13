import React, { ComponentProps } from 'react'
import { MenuItemContainer } from './styles'
import Icon, { IconNameProps } from '@sonica/icons'

export interface MenuItemProps
  extends ComponentProps<typeof MenuItemContainer> {
  iconName: IconNameProps
  children: React.ReactNode
}

export function MenuItem({ iconName, children, ...rest }: MenuItemProps) {
  return (
    <MenuItemContainer {...rest}>
      <Icon name={iconName} size="sm" />
      {children}
    </MenuItemContainer>
  )
}
