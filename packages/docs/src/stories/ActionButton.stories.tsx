import type { StoryObj, Meta } from '@storybook/react'
import { ActionButton, ActionButtonProps, Box } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Action Button',
  component: ActionButton,
  args: {
    iconName: 'add',
    size: 'md',
    onClick: () => {
      console.log('clicked')
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$2',
            width: '500px',
            height: '200px',
            background: '$secondaryColor100',
          }}
        >
          <Story />
        </Box>
      )
    },
  ],
} as Meta<ActionButtonProps>

export const Primary: StoryObj<ActionButtonProps> = {
  args: {
    variant: 'default',
    disabled: false,
  },
}

export const Remove: StoryObj<ActionButtonProps> = {
  args: {
    variant: 'remove',
    iconName: 'remove',
    disabled: false,
  },
}
