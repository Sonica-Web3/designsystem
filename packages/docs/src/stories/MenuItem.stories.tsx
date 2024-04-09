import type { StoryObj, Meta } from '@storybook/react'
import { Box, MenuItem, MenuItemProps } from '@sonicaweb3/react'

export default {
  title: 'Surfaces/Menu Item',
  component: MenuItem,

  args: {
    children: 'Menu Item',
    iconName: 'dashboard',
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '500px',
          height: '200px',
          background: '$secondaryColor100',
        }}
      >
        <Box
          css={{
            width: '200px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: '$4',
            background: '$secondaryColor300',
          }}
        >
          <Story />
        </Box>
      </Box>
    ),
  ],
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
