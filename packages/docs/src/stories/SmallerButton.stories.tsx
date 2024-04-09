import type { StoryObj, Meta } from '@storybook/react'
import { Box, SmallerButton, SmallerButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Smaller Button',
  component: SmallerButton,
  args: {
    iconName: 'chevron_left',
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
} as Meta

export const Primary: StoryObj<SmallerButtonProps> = {}
