import type { StoryObj, Meta } from '@storybook/react'
import { InfoButton, InfoButtonProps } from '@sonicaweb3/react'

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
} as Meta<InfoButtonProps>

export const Primary: StoryObj<InfoButtonProps> = {}
