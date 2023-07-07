import React, { ComponentProps } from 'react'
import { MenuItemContainer } from './styles'

export interface MenuItemProps
  extends ComponentProps<typeof MenuItemContainer> {
  iconName: string
  children?: React.ReactNode
}

export function MenuItem({ iconName, children, ...rest }: MenuItemProps) {
  return (
    <MenuItemContainer {...rest}>
      <i className="material-symbols-rounded">{iconName}</i>
      <span>{children}</span>
    </MenuItemContainer>
  )
}
