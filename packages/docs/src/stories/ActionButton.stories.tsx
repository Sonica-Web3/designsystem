import type { StoryObj, Meta } from '@storybook/react'
import { ActionButton, ActionButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Action Button',
  component: ActionButton,
  args: {
    iconName: 'chevron-left',
    borderColor: '$primaryColor500',
  },
} as Meta<ActionButtonProps>

export const Primary: StoryObj<ActionButtonProps> = {}

export const Remove: StoryObj<ActionButtonProps> = {
  args: {
    variant: 'remove',
    iconName: 'trash',
  },
}
