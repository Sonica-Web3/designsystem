import type { StoryObj, Meta } from '@storybook/react'
import { CardOption, CardOptionProps } from '@sonicaweb3/react'
import Icon from '@sonicaweb3/icons'
export default {
  title: 'Surfaces/Card Option',
  component: CardOption,
  args: {
    text: 'Token',
    icon: <Icon name="info" size="lg" />,
  },
} as Meta<CardOptionProps>

export const Primary: StoryObj<CardOptionProps> = {}

export const Selected: StoryObj<CardOptionProps> = {
  args: {
    selected: 'true',
  },
}

export const Disabled: StoryObj<CardOptionProps> = {
  args: {
    disabled: 'true',
  },
}
