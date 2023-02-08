import type { StoryObj, Meta } from '@storybook/react'
import { MenuItem, MenuItemProps } from '@sonica/react'

export default {
  title: 'Surfaces/Menu Item',
  component: MenuItem,

  args: {
    children: 'Menu Item',
    icon: 'info',
  },
} as Meta<MenuItemProps>

export const Primary: StoryObj<MenuItemProps> = {}

export const Selected: StoryObj<MenuItemProps> = {
  args: {
    selected: 'true',
  },
}

// export const Disabled: StoryObj<MenuItemProps> = {
//   args: {
//     disabled: 'true',
//   },
// }
