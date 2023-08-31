import React, { ComponentProps } from 'react'
import { MenuItemContainer } from './styles'
import Icon from '@sonicaweb3/icons'

export interface MenuItemProps
  extends ComponentProps<typeof MenuItemContainer> {
  iconName: string
  children?: React.ReactNode
}

export function MenuItem({ iconName, children, ...rest }: MenuItemProps) {
  return (
    <MenuItemContainer {...rest}>
      {iconName === 'defi-v3' ? (
        <Icon name={iconName} size="md" />
      ) : (
        <i className="material-symbols-rounded notranslate">{iconName}</i>
      )}

      <span>{children}</span>
    </MenuItemContainer>
  )
}
