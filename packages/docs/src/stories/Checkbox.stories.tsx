import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@sonica/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'CTA Checkbox',
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
