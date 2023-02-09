import React, { ComponentProps } from 'react'
import { MenuItemContainer } from './styles'
import Icon, { IconNameProps } from '@sonica/icons'

export interface MenuItemProps
  extends ComponentProps<typeof MenuItemContainer> {
  icon: IconNameProps
  children: React.ReactNode
}

export function MenuItem({ icon, children, ...rest }: MenuItemProps) {
  return (
    <MenuItemContainer {...rest}>
      <Icon name={icon} size="sm" />
      {children}
    </MenuItemContainer>
  )
}
