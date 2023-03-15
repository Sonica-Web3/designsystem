import type { StoryObj, Meta } from '@storybook/react'
import { Pill, PillProps } from '@sonicaweb3/react'

export default {
  title: 'Complement/Pill',
  component: Pill,
  args: {
    children: 'testnet',
  },
  argTypes: {
    small: {
      control: {
        type: 'boolean',
      },
    },
    bgColor: {
      control: 'radio',
      option: [],
    },
  },
} as Meta<PillProps>

export const Primary: StoryObj<PillProps> = {}

export const SmallOption: StoryObj<PillProps> = {
  args: {
    small: true,
  },
}
