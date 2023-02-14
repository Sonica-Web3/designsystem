import type { StoryObj, Meta } from '@storybook/react'
import { SmallerButton, SmallerButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Smaller Button',
  component: SmallerButton,
  args: {
    iconName: 'chevron-left',
  },
} as Meta<SmallerButtonProps>

export const Primary: StoryObj<SmallerButtonProps> = {}
