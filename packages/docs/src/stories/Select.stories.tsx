import type { StoryObj, Meta } from '@storybook/react'
import { Box, Select, SelectProps } from '@sonicaweb3/react'

export default {
  title: 'Form/Select',
  component: Select,

  args: {
    options: [
      {
        icon: 'eth-logo',
        text: 'Ethereum',
        value: 'eth',
      },
      {
        icon: 'polygon-logo',
        text: 'Polygon',
        value: 'pol',
      },
    ],
    placeholder: 'Select',
  },
  decorators: [
    (Story) => {
      return <Box css={{ display: 'flex', width: '200px' }}>{Story()}</Box>
    },
  ],
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}

export const Collapsed: StoryObj<SelectProps> = {
  args: {
    collapsed: 'true',
  },
}
