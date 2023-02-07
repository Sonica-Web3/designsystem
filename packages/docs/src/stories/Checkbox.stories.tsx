import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps } from '@sonica/react'
import Icon from '@sonica/icons'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'CTA Checkbox',
    icon: <Icon name="Nft" />,
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
