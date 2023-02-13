import type { StoryObj, Meta } from '@storybook/react'
import { MenuItem, MenuItemProps } from '@sonica/react'

export default {
  title: 'Surfaces/Menu Item',
  component: MenuItem,

  args: {
    children: 'Menu Item',
    iconName: 'info',
  },
} as Meta<MenuItemProps>

export const Primary: StoryObj<MenuItemProps> = {}

export const Selected: StoryObj<MenuItemProps> = {
  args: {
    selected: 'true',
  },
}

export const Collapsed: StoryObj<MenuItemProps> = {
  args: {
    collapsed: 'true',
  },
}

export const CollapsedSelected: StoryObj<MenuItemProps> = {
  args: {
    collapsed: 'true',
    selected: 'true',
  },
}
