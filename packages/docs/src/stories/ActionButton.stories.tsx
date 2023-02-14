import type { StoryObj, Meta } from '@storybook/react'
import { ActionButton, ActionButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Action Button',
  component: ActionButton,
  args: {
    iconName: 'eye',
  },
} as Meta<ActionButtonProps>

export const Primary: StoryObj<ActionButtonProps> = {}

export const Remove: StoryObj<ActionButtonProps> = {
  args: {
    iconName: 'trash',
    variant: 'remove',
  },
}
