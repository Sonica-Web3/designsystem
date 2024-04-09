import type { StoryObj, Meta } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@sonicaweb3/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'CTA Checkbox',
  },
  decorators: [
    (Story) => {
      return (
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
            as="label"
            css={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              gap: '$2',
            }}
          >
            <Story />
            <Text variant="text">Accept terms of use</Text>
          </Box>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
