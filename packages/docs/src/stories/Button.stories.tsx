import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@sonicaweb3/react'

export default {
  title: 'Buttons/CTA Button',
  component: Button,
  args: {
    children: 'CTA Button',
  },
} as Meta<ButtonProps>

export const Solid: StoryObj<ButtonProps> = {}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
  },
}

export const Error: StoryObj<ButtonProps> = {
  args: {
    variant: 'error',
  },
}
