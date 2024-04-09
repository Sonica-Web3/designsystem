import type { StoryObj, Meta } from '@storybook/react'
import { Box, InfoButton, InfoButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Info Button',
  component: InfoButton,
  args: {
    text: 'This is an info button',
    align: 'bottom',
  },
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right', 'top', 'bottom'],
      },
    },
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
        <Story />
      </Box>
    ),
  ],
} as Meta<InfoButtonProps>

export const Primary: StoryObj<InfoButtonProps> = {}
