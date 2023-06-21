import type { StoryObj, Meta } from '@storybook/react'
import { ActionButton, ActionButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/Action Button',
  component: ActionButton,
  args: {
    iconName: 'plus',
    size: 'md',
    onClick: () => {
      console.log('clicked')
    },
  },
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
    iconName: 'trash',
    disabled: false,
  },
}
